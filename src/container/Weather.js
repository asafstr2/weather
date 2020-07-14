import React from "react";
import { fetchweather } from "../store/actions/weather";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import WetherCard from "../component/WetherCard";
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: "flex",
    flexWrap: "wrap",
    
  },
}));
function Weather({ weather }) {
  const classes = useStyles();
  const wetherList = weather.map((dailyWeather, i) => {
    const { Date, Temperature, Day, Link } = dailyWeather;
    const { Rain, RainProbability } = Day;
    return (
      <WetherCard
        key={i}
        Date={Date}
        Temperature={Temperature}
        IconPhrase={Day.IconPhrase}
        Rain={Rain.Value}
        RainProbability={RainProbability}
        Link={Link}
      />
    );
  });

  return <div className={classes.cardRoot}>{wetherList}</div>;
}

function mapStateToProp(state) {
  return {
    weather: state.weather,
  };
}

export default connect(mapStateToProp, { fetchweather })(Weather);
