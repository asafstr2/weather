import React from "react";
import Weather from "../container/Weather";
import { connect } from "react-redux";
import { addFavorite } from "../store/actions/favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { removeError } from "../store/actions/error";
import AlertDialogSlide  from "./AlertDialogSlide"
const useStyles = makeStyles({
  headline: {
    display: "flex",
    marginBottom: 10,
    "& a": {
      marginRight: "auto",
      "& svg": {
        color: "red",
        fontSize: "2rem",
      },
      "& :hover": {
        transform: "scale(1.1)",
        transition: "all 0.6s",
      },
    },
  },
  header: {
    marginRight: 10,
    letterSpacing:2
  },
});

function HomePage({ location, addFavorite ,errors}) {
  const classes = useStyles();

  const hundleClick = async () => {
    addFavorite(location);
  };

  return (
    <div>
      {errors.messege && (
        <AlertDialogSlide content={errors.messege} removeError={removeError} />
      )}
      <div className={classes.Container}></div>
      <div className={classes.headline}>
        <h1 className={classes.header}>{location.text}</h1>
        {location?.text ? (
          <NavLink size="small" to="/favorite">
            <FavoriteBorderIcon onClick={hundleClick} />
          </NavLink>
        ) : (
          <h1>
            Location is off or not allowed from this divice but you can still
            search for a city in the NavBar
          </h1>
        )}
      </div>
      <Weather />
    </div>
  );
}

function mapStateToProp(state) {
  return {
    location: state.location,
    errors: state.errors,
  };
}
export default connect(mapStateToProp, { addFavorite, removeError })(HomePage);
