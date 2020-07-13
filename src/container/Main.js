import React from "react";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import HomePage from "../component/HomePage";
import Favorite from "../component/Favorite";
import { removeError } from "../store/actions/error";

const useStyles = makeStyles({
  container: {},
});

function Main({ favorite, errors, removeError }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} />}
        ></Route>
        <Route
          exact
          path="/favorite"
          render={(props) => (
            <Favorite
              favorite={favorite}
              {...props}
              errors={errors}
              removeError={removeError}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.favorite, //getting the current user from the state it an object with 2 keys isAuthenticated=boolian and the user obj wich contain id username and profile image
    errors: state.errors, //contain the error from the server if any
  };
}
const mapDispatchToProps = {
//   authUser,
  removeError,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
