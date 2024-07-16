import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial states
const initialState = {
  show: false,
  productData: [],
  isLoad: false,
  error: null,
  id: null,
};

// Slices
const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShow(state) {
      state.show = !state.show;
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
    setId(state, action) {
      state.id = action.payload ? action.payload : null;
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
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    updateTotal(state, action) {
      state.total += action.payload;
    },
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
