import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoicesSlice";
import productReducer from "./slices/productsSlice.js";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productReducer,
});

export default rootReducer;
