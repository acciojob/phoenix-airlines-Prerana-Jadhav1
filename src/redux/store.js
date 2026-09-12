import { createStore } from "redux";
import bookingReducer from "./reducer";

const store = createStore(bookingReducer);

export default store;
