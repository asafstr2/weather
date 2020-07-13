import React, { useEffect } from "react";
import { connect } from "react-redux";

export default function isThereFav(ComponentToBerendered) {
  return connect(mapStateToProps)(favorite);
  function favorite({ favorite, history }, props) {
    useEffect(() => {
      if (!favorite) history.push("/home");
    }, [favorite]);
    return <ComponentToBerendered {...props} />;
  }
  function mapStateToProps(state) {
    return {
      favorite: state.favorite,
    };
  }
}
