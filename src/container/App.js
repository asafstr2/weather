import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";


const store = configureStore();

//checking to see after a refresh if token exists in session storage if it does we verify the validaty of it with decode and also sending it via axios to server with next request if tempered with force logout user
// if (localStorage.favorite) {
//   try {
//     store.dispatch(setFavorite(localStorage.favorite));
//   } catch (error) {
//     store.dispatch(setFavorite({}));
//   }
// }

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
