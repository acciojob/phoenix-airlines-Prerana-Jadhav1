import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSearch } from "./../redux/actions";

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

const FlightSearch = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");

  const handleTripType = (tripType) => {
    dispatch(setSearch({ tripType }));
  };

  const handleChange = (e) => {
    dispatch(setSearch({ [e.target.name]: e.target.value }));
  };

  const handleSearch = () => {
    if (!search.source || !search.destination || !search.journeyDate) {
      setError("Please fill Source, Destination and Journey Date");
      return;
    }
    if (search.source === search.destination) {
      setError("Source and Destination cannot be the same");
      return;
    }
    if (search.tripType === "roundTrip" && !search.returnDate) {
      setError("Please select a Return Date for round trip");
      return;
    }
    setError("");
    history.push("/flight-booking");
  };

  return (
    <div className="flight-search">
      <h2>Search Flights</h2>
      <div className="trip-type">
        <label>
          <input
            type="radio"
            id="oneWay"
            name="tripType"
            checked={search.tripType === "oneWay"}
            onChange={() => handleTripType("oneWay")}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            id="roundTrip"
            name="tripType"
            checked={search.tripType === "roundTrip"}
            onChange={() => handleTripType("roundTrip")}
          />
          Round Trip
        </label>
      </div>

      <select name="source" value={search.source} onChange={handleChange}>
        <option value="">Source City</option>
        {CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        name="destination"
        value={search.destination}
        onChange={handleChange}
      >
        <option value="">Destination City</option>
        {CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="journeyDate"
        value={search.journeyDate}
        onChange={handleChange}
      />

      {search.tripType === "roundTrip" && (
        <input
          type="date"
          name="returnDate"
          value={search.returnDate}
          onChange={handleChange}
        />
      )}

      {error && <p className="error-message">{error}</p>}

      <button className="button" onClick={handleSearch}>
        SEARCH FLIGHT
      </button>
    </div>
  );
};

export default FlightSearch;
