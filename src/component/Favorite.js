import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import WetherCard from "../component/WetherCard";
import { apiCall } from "../services/api";
import { WeatherApiUrl } from "../store/actions/weather";
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));
function Favorite({favorite }) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    try {
      favorite.map((fav) =>
        apiCall("get", WeatherApiUrl(1, fav.key)).then((res) => {
          setstate((state) => [...state, res.DailyForecasts[0]]);
        })
      );
    } catch (error) {}
  }, [favorite]);

  const classes = useStyles();


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

export default connect(mapStateToProp, {  })(Favorite);
