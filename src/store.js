import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial states
const initialState = {
  show: false,
  logIn: false,
  signUp: false,
  productData: [],
  cart: [],
  isLoad: false,
  error: null,
};

const initialStateAuth = {
  show: false,
  logIn: false,
  signUp: false,
  arrUser: [],
  user: "",
};

// Slices
const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    SHOW_POPUP(state) {
      state.show = true;
    },
    HIDE_POPUP(state) {
      state.show = false;
    },
    LoadProductData(state, actions) {
      state.productData = actions.payload;
    },
    UpDateProduct(state, actions) {
      state.productData = actions.payload;
    },
    setIsLoad(state, actions) {
      state.isLoad = actions.payload;
    },
    setError(state, actions) {
      state.error = actions.payload;
    },
    upDateCart(state, actions) {
      state.cart = [...state.cart, actions.payload];
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.logIn = !state.logIn;
    },
    signUp(state) {
      state.signUp = !state.signUp;
    },
    LoadUser(state, actions) {
      state.arrUser = [...state.arrUser, actions.payload];
    },
    setUser(state, actions) {
      state.user = actions.payload;
    },
  },
});

// Configure store
const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const showAction = showSlice.actions;
export const authAction = authSlice.actions;

export default store;
