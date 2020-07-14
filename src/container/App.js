import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import NewNavbar from "./NewNavbar";
import Main from "./Main";
import { Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div style={{background:"#f5f5f5"}}>
        <NewNavbar />
        <Container maxWidth="lg" >
            <Main />
        </Container>
      </div>
    </Router>
  </Provider>
);

export default App;
