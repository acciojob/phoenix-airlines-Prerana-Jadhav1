import {
  SET_SEARCH,
  SET_FLIGHT,
  SET_PASSENGER,
  CONFIRM_BOOKING,
  RESET_BOOKING,
} from "./actions";

export const initialState = {
  search: {
    tripType: "oneWay",
    source: "",
    destination: "",
    journeyDate: "",
    returnDate: "",
  },
  flight: {
    airline: "Air India",
    flightNumber: "AI-275",
  },
  passenger: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  },
  isConfirmed: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: { ...state.search, ...action.payload } };
    case SET_FLIGHT:
      return { ...state, flight: { ...state.flight, ...action.payload } };
    case SET_PASSENGER:
      return {
        ...state,
        passenger: { ...state.passenger, ...action.payload },
      };
    case CONFIRM_BOOKING:
      return { ...state, isConfirmed: true };
    case RESET_BOOKING:
      return { ...initialState };
    default:
      return state;
  }
};

export default bookingReducer;
