import { combineReducers } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  OrderCreate,
  OrderDelete,
  OrderComplete,
  IndexItemSuccess,
  IndexItemFail,
  SUCCESS,
  ERROR,
  CLEAR
} from "./action";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};
const indexState = {}

export const rootReducer = combineReducers({
  auth,
  order,
  index,
  alertReducer
});

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
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
      return {};
    case OrderDelete:
      return {};

    case OrderComplete:
      return {};

    default:
      return state;
  }
}


function index(state = indexState , action) {
  switch (action.type) {
    case IndexItemSuccess:
      return Object.assign({}, state, { number: state.number })
    case IndexItemFail:
      return {}
    default:
      return state
  }
}

function alertReducer(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case CLEAR:
      return {};
    default:
      return state
  }
}
