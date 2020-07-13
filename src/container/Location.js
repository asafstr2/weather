import React, { useEffect } from "react";
import { fetchLocation } from "../store/actions/location";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  card: {},
}));
function Location({ fetchLocation, location }) {
  useEffect(() => {
    fetchLocation("eilat");
  }, []);

  const classes = useStyles();

  return <div>{location[0]?.EnglishName}</div>;
}

function mapStateToProp(state) {
  return {
    location: state.location,
  };
}

export default connect(mapStateToProp, { fetchLocation })(Location);
