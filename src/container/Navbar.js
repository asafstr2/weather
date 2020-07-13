import React from "react";
import { NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
      width: "20px",
      borderRadius: "2px",
      margin: "5px",
      marginRight: "2px",
    },
  },
  links: {
    "& li": {
      margin: "0 3px 0 3px",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <nav className={`navbar navbar-expand ${classes.navbar}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to="/" className={`navbar-brand ${classes.navbarBrand}`}>
            <img src="" alt="weather icon"></img>
          </NavLink>
        </div>
          <ul className={`nav navbar-nav navbar-right ${classes.links}`}>
            <li>
              <NavLink to="/home ">home</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">favorite</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}


