import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetBooking } from "./../redux/actions";

const Confirmation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleBackToHome = () => {
    dispatch(resetBooking());
    history.push("/");
  };

  return (
    <div className="confirmation">
      <p>Thank you for the Booking. Click the below button to return to home page</p>
      <button className="button" onClick={handleBackToHome}>
        BACK TO HOME
      </button>
    </div>
  );
};

export default Confirmation;
