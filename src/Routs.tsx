import React from 'react';
import App from './App';
import Flights from './pages/Flights';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store/store";


const Routs = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/flights" component={Flights} />
      </BrowserRouter>
    </Provider>
);

export default Routs;
