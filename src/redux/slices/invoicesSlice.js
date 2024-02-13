import { createSlice } from "@reduxjs/toolkit";
import getAbsCurrency from "../../utils/getAbsCurrency";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }
    },
    updateInvoiceOnProductUpdate: (state, action) => {
      const { productId, priceDiff, newPrice } = action.payload;
      state.forEach((invoice) => {
        const item = invoice?.items.find((product) => product.itemId === productId);
        if (item) {
          invoice.total = String(
            (parseFloat(invoice.total) + getAbsCurrency(parseFloat(priceDiff), newPrice, invoice.currency)).toFixed(2),
          );
        }
      });
    },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
  updateInvoiceOnProductUpdate
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
