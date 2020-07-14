import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import icon from "../assets/icon.svg";
import Autocompleate from "../component/Autocompleate";

const useStyles = makeStyles({
  navbar: {
    background:
      " radial-gradient(circle, rgba(253,133,29,1) 0%, rgba(252,204,69,0.9447129193474265) 100%)",
    marginBottom: "1rem",
    "& a": {
      color: "black",
      fontWeight: "bold",
      opacity: "0.6",
      transition: "0.3s",
      "&:hover": {
        opacity: "1",
        textDecoration: "none",
        cursor: "pointer",
      },
    },
  },

  navbarBrand: {
    "& img": {
      display: "inline-block",
      width: 40,
      height: 40,
      borderRadius: "2px",
      margin: "5px",
    },
  },
  links: {
    "& li": {
      margin: "0 3px 0 3px",
    },
  },
});
export default function NewNavbar() {
  const [geo, setGeo] = useState();

  const classes = useStyles();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeo({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${classes.navbar}`}
    >
      {/* eslint-disable-next-line  */}
      <span className="navbar-brand">
        <NavLink to="/" className={`navbar-brand ${classes.navbarBrand}`}>
          <img src={icon} alt="weather icon"></img>
        </NavLink>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line  */}
            <span className="nav-link">
              <NavLink to="/favorite">Favorite</NavLink>
            </span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Autocompleate geo={geo} />
        </form>
      </div>
    </nav>
  );
}
