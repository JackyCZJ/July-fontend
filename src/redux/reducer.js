import { combineReducers } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  OrderCreate,
  OrderDelete,
  OrderComplete
} from "./action";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export const rootReducer = combineReducers({
  auth,
  order,

});

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

function order(state = {}, action) {
  switch (action.type) {
    case OrderCreate:

    case OrderDelete:

    case OrderComplete:
    default:
      return state;
  }
}

