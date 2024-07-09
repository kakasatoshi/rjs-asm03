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
/////////////////////////Auth/////////////////////////

const initialStateAuth = {
  show: false,
  logIn: false,
  arrUser: [],
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.logIn = !state.logIn;
    },
    logOut(state) {
      state.logIn = !state.logIn;
    },
    LoadUser(state, actions) {
      state.arrUser = [...state.arrUser, actions.payload];
    },
    setUser(state, actions) {
      state.user = actions.payload;
    },
  },
});
///////////////////////////////////cart///////////////////////////////
const initialStateCart = {
  listCart: [],
  user: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    ADD_CART(state, actions) {
      const existingProductIndex = state.listCart.findIndex(
        (item) => item.product._id.$oid === actions.payload.product._id.$oid
      );
      if (existingProductIndex !== -1) {
        state.listCart[existingProductIndex] = {
          ...state.listCart[existingProductIndex],
          quantity:
            state.listCart[existingProductIndex].quantity +
            actions.payload.quantity,
        };
      } else {
        state.listCart = [...state.listCart, actions.payload];
      }
    },
    UPDATE_CART(state, actions) {
      return {
        ...state,
        listCart: state.listCart.map((item) =>
          item.id === actions.payload.id ? actions.payload : item
        ),
      };
    },
    DELETE_CART(state, actions) {
      return {
        ...state,
        listCart: state.listCart.filter((item) => item.id !== actions.payload),
      };
    },
  },
});

// Configure store
const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const showAction = showSlice.actions;
export const authAction = authSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
