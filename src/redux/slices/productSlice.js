import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilteredProducts: (state, action) => {
  state.products = action.payload;
}

  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
