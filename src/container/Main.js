import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import HomePage from "../component/HomePage";
import Favorite from "../component/Favorite";
import { removeError } from "../store/actions/error";
import isThereFav from "../hoc/isThereFav";
const useStyles = makeStyles({
  container: {},
});

function Main({ errors, removeError }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage {...props} errors={errors} removeError={removeError} />
          )}
        ></Route>

        <Route exact path="/favorite" component={isThereFav(Favorite)}></Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    errors: state.errors, //contain the error from the server if any
  };
}
const mapDispatchToProps = {
  removeError,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
