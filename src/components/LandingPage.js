import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="landing-page">
      <h2>Welcome to Flight Booking App</h2>
      <button className="button" onClick={() => history.push("/flight-search")}>
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
};

export default LandingPage;
