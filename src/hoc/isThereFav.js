import React, { useEffect } from "react";
import { connect } from "react-redux";

export default function isThereFav(ComponentToBerendered) {
  return connect(mapStateToProps)(Favorite);
  function Favorite({ favorite, history }, props) {
    useEffect(() => {
      if (favorite.length<1) history.push("/");

      // eslint-disable-next-line
    }, [favorite]);
    return <ComponentToBerendered {...props} />;
  }
  function mapStateToProps(state) {
    return {
      favorite: state.favorite,
    };
  }
}
