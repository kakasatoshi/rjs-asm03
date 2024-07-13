import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial states
const initialState = {
  show: false,
  logIn: false,
  signUp: false,
  productData: [],
  isLoad: false,
  error: null,
};

// Slices
const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showPopup(state) {
      state.show = true;
    },
    hidePopup(state) {
      state.show = false;
    },
    loadProductData(state, action) {
      state.productData = action.payload;
    },
    updateProduct(state, action) {
      state.productData = action.payload;
    },
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

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
      state.logIn = true;
    },
    logOut(state) {
      state.logIn = false;
    },
    loadUser(state, action) {
      state.arrUser = [...state.arrUser, action.payload];
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const initialStateCart = {
  listCart: [],
  user: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addCart(state, action) {
      // if(state.listCart.includes(action.payload)
      if (state.listCart.length === 0) state.listCart.push(action.payload);
      else {
        const existingProductIndex = state.listCart.findIndex(
          (item) => item.product._id.$oid === action.payload.product._id.$oid
        );
        if (existingProductIndex === -1) {
          const data = {
            product: action.payload.product,
            quantity: action.payload.quantity,
          };
          state.listCart.push(data);
        } else {
          let newItem = [...state.listCart];
          newItem[existingProductIndex] = {
            ...newItem[existingProductIndex],
            quantity:
              newItem[existingProductIndex].quantity + action.payload.quantity,
          };
          state.listCart = newItem;
        }
      }
    },
    updateCart(state, action) {
      state.listCart = state.listCart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteCart(state, action) {
      state.listCart = state.listCart.filter(
        (item) => item.id !== action.payload
      );
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

export const showActions = showSlice.actions;
export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
