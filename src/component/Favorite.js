import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import WetherCard from "../component/WetherCard";
import { apiCall } from "../services/api";
import { WeatherApiUrl, fetchweather } from "../store/actions/weather";
import { useHistory } from "react-router-dom";
import { addLocation } from "../store/actions/location";
import {removeFavorite} from "../store/actions/favorite"

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));
function Favorite({ favorite, fetchweather,addLocation ,removeFavorite}) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate([])
    try {
      favorite.map((fav) =>
        apiCall("get", WeatherApiUrl(1, fav.key)).then((res) => {
          setstate((state) => [...state, res.DailyForecasts[0]]);
        })
      );
    } catch (error) {}
  }, [favorite]);
  let history = useHistory();
  const classes = useStyles();

  const hundledelete = (key,e) => {
    e.stopPropagation();
    removeFavorite(key)
  };
  const hundleClick = (key, text) => {
    fetchweather(5, key);
    addLocation({
      key,
      text,
    });
    history.push("/");
  };

  const wetherList = state?.map((dailyWeather, i) => {
    const { Date, Temperature, Day, Link } = dailyWeather;
    const { Rain, RainProbability } = Day;
    return (
      <WetherCard
        favorite={favorite[i]?.text}
        key={favorite[i]?.key}
        Date={Date}
        Temperature={Temperature}
        IconPhrase={Day.IconPhrase}
        Rain={Rain.Value}
        RainProbability={RainProbability}
        Link={Link}
        hundleClick={() => hundleClick(favorite[i]?.key, favorite[i]?.text)}
        deleteCard={(e) => hundledelete(favorite[i]?.key, e)}
        isFavorite={true}
      />
    );
  });

  return (
    <div className={classes.cardRoot}>
      {state ? wetherList : <div>loading</div>}
    </div>
  );
}

function mapStateToProp(state) {
  return {
    favorite: state.favorite,
  };
}

export default connect(mapStateToProp, { fetchweather ,addLocation,removeFavorite})(Favorite);
