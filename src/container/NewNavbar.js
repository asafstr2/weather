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
      class={`navbar navbar-expand-lg navbar-light bg-light ${classes.navbar}`}
    >
      {/* eslint-disable-next-line  */}
      <a class="navbar-brand">
        <NavLink to="/" className={`navbar-brand ${classes.navbarBrand}`}>
          <img src={icon} alt="weather icon"></img>
        </NavLink>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            {/* eslint-disable-next-line  */}
            <a class="nav-link">
              <NavLink to="/favorite">Favorite</NavLink>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <Autocompleate geo={geo} />
        </form>
      </div>
    </nav>
  );
}
