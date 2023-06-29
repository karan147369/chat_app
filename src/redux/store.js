import chatsReducer from "./reducer";
import { combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(chatsReducer, {}, applyMiddleware(thunk));
export default store;
