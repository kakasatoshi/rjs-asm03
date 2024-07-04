// import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import useProducts from "./http/useProduct";
import { useState } from "react";

// const [products, isLoad, error] = useProducts();

const initialState = {
  show: false,
  logIn: false,
  signUp: false,
  productData: [],
  cart: [],
  isLoad: false,
  error: null,
};

const showSlice = createSlice({
  name: "show",
  initialState: initialState,
  reducers: {
    SHOW_POPUP(state) {
      state.show = true;
    },
    HIDE_POPUP(state) {
      state.show = false;
    },
    login(state) {
      state.logIn = !state.logIn;
    },
    signUp(state) {
      state.signUp = !state.signUp;
    },
    LoadProductData(state, actions) {
      state.productData = [];
      actions.payload.forEach((element) => {
        state.productData.push(element);
      });
    },
    UpDateProduct(state, actions) {
      state.productData = [];
      actions.payload.forEach((element) => {
        state.productData.push(element);
      });
    },
    isLoad(state, actions) {
      state.isLoad = actions.payload;
    },
    error(state, actions) {
      state.error = actions.payload;
    },
    upDateCart(state, actions) {
      state.cart = [...state.cart, actions.payload];
      // state.cart.push(account);
    },
  },
});

// const store = createSlice(showSlice.reducer);
const store = configureStore({
  reducer: { show: showSlice.reducer },
});

export const showAction = showSlice.actions;

export default store;
