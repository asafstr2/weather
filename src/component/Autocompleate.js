import React, { useState, useEffect } from "react";
import {
  LocationApiUrlAuto,
  LocationApiUrlGeo,
  addLocation,
} from "../store/actions/location";
import { fetchweather } from "../store/actions/weather";
import { connect } from "react-redux";
import useDebounce from "./useDebounce";
import { apiCall } from "../services/api";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { removeError } from "../store/actions/error";
import AlertDialogSlide from "./AlertDialogSlide";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  headline: {
    margin: "auto",
  },
  list: {
    border: "1px solid black",
  },
});

function Autocompleate({
  fetchweather,
  geo,
  addLocation,
  errors,
  removeError,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const classes = useStyles();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      apiCall("get", LocationApiUrlAuto(debouncedSearchTerm)).then(
        (results) => {
          setIsSearching(false);
          setResults(results);
        }
      );
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (geo?.lon)
      apiCall("get", LocationApiUrlGeo(geo?.lat, geo?.lon)).then((results) => {
        fetchweather(5, results.Key);
        addLocation({
          key: results.Key,
          text: `${results.LocalizedName},${results.Country.ID}`,
        });
      });
    //eslint-disable-next-line
  }, [geo]);

  const hundleClick = (result) => {
    if (!result) return;
    fetchweather(5, result.Key);
    setSearchTerm(`${result.LocalizedName},${result.Country.ID}`);
    addLocation({
      key: result.Key,
      text: `${result.LocalizedName},${result.Country.ID}`,
    });
  };

  const autocomplete = (
    <div>
      {errors.messege && (
        <AlertDialogSlide content={errors.messege} removeError={removeError} />
      )}
      <Autocomplete
        onInputChange={(event, newInputValue) => {
          setSearchTerm(newInputValue);
        }}
        placeholder={"Search for a city"}
        inputValue={searchTerm}
        onChange={(event, newVlue) => hundleClick(newVlue)}
        id="combo"
        options={results}
        onClick={() => hundleClick(results)}
        getOptionLabel={(option) =>
          `${option.LocalizedName},${option.Country.ID}`
        }
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={isSearching ? "loading" : "Search for city"}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isSearching ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );

  return <div className={classes.container}>{autocomplete}</div>;
}

function mapStateToProp(state) {
  return {
    location: state.location,
    errors: state.errors,
  };
}

export default connect(mapStateToProp, {
  fetchweather,
  addLocation,
  removeError,
})(Autocompleate);
