import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Sunny, Cloudy, Rain as Rainy, Snow } from "weather-styled-icon";

import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: 50,
    marginRight:20
  
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 50,
  },
  temp: {
    fontSize: 10,
  },
});

export default function WetherCard({
  Date,
  Temperature,
  IconPhrase,
  Rain,
  RainProbability,
  Link,
  favorite,
}) {
  const maximum = `${Temperature.Maximum.Value}${Temperature.Maximum.Unit}`;
  const minimum = `${Temperature.Minimum.Value}${Temperature.Minimum.Unit}`;

  const icon = () => {
    if (IconPhrase.includes("un")) return <Sunny />;
    if (IconPhrase.includes("loud")) return <Cloudy />;
    if (IconPhrase.includes("ain") || IconPhrase.includes("howers"))
      return <Rainy />;
    if (IconPhrase.includes("now")) return <Snow />;
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {moment(Date).format("DD/MM/YY")}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {favorite && favorite}
        </Typography>
        <Typography variant="h5" component="h2">
          {IconPhrase}
        </Typography>
        {icon()}
        <Typography className={classes.pos} color="textSecondary">
          Rain Probability: {RainProbability}
        </Typography>
        <Typography variant="body2" component="p" display="inline">
          {maximum}
        </Typography>
        <Typography
          color="textSecondary"
          display="inline"
          className={classes.temp}
        >
          ` HI`
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" display="inline">
          {minimum}
        </Typography>
        <Typography
          color="textSecondary"
          display="inline"
          className={classes.temp}
        >
          ` LO`
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={Link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
