import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import {Provider} from "react-redux";
import {store} from "./store/store";
import Login from "./pages/Login";
import Flights from "./pages/Flights";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/flights" component={Flights} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
