import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPassenger, confirmBooking } from "./../redux/actions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[0-9]{10}$/;

const FlightBooking = () => {
  const passenger = useSelector((state) => state.passenger);
  const flight = useSelector((state) => state.flight);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    dispatch(setPassenger({ [e.target.name]: e.target.value }));
  };

  const handleConfirm = () => {
    if (
      !passenger.firstName ||
      !passenger.lastName ||
      !passenger.email ||
      !passenger.mobile
    ) {
      setError("All fields are required");
      return;
    }
    if (!EMAIL_REGEX.test(passenger.email)) {
      setError("Please enter a valid Email ID");
      return;
    }
    if (!MOBILE_REGEX.test(passenger.mobile)) {
      setError("Please enter a valid 10-digit Mobile Number");
      return;
    }
    setError("");
    dispatch(confirmBooking());
    history.push("/confirmation");
  };

  return (
    <div className="flight-booking">
      <h2>
        Booking Confirmation for Flight {flight.airline} ({flight.flightNumber})
      </h2>

      <label>
        First Name*
        <input
          type="text"
          name="firstName"
          placeholder="first"
          value={passenger.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name*
        <input
          type="text"
          name="lastName"
          placeholder="last"
          value={passenger.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email ID*
        <input
          type="email"
          name="email"
          placeholder="last@first.com"
          value={passenger.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Mobile Number*
        <input
          type="text"
          name="mobile"
          placeholder="1234567890"
          value={passenger.mobile}
          onChange={handleChange}
        />
      </label>

      {error && <p className="error-message">{error}</p>}

      <button className="button" onClick={handleConfirm}>
        CONFIRM BOOKING
      </button>
    </div>
  );
};

export default FlightBooking;
