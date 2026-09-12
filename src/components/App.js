import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./../redux/store";
import LandingPage from "./LandingPage";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";
import './../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="app-header">
            <h1>Flight Booking App</h1>
          </header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/flight-search" component={FlightSearch} />
            <Route exact path="/flight-booking" component={FlightBooking} />
            <Route exact path="/confirmation" component={Confirmation} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
