export const SET_SEARCH = "SET_SEARCH";
export const SET_FLIGHT = "SET_FLIGHT";
export const SET_PASSENGER = "SET_PASSENGER";
export const CONFIRM_BOOKING = "CONFIRM_BOOKING";
export const RESET_BOOKING = "RESET_BOOKING";

export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });
export const setFlight = (flight) => ({ type: SET_FLIGHT, payload: flight });
export const setPassenger = (passenger) => ({
  type: SET_PASSENGER,
  payload: passenger,
});
export const confirmBooking = () => ({ type: CONFIRM_BOOKING });
export const resetBooking = () => ({ type: RESET_BOOKING });
