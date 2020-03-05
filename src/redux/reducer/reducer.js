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
  INFO_GET_SUCCESS,
  SUCCESS,
  ERROR,
  CLEAR, FETCH_INDEX_PENDING, FETCH_INDEX_SUCCESS, FETCH_INDEX_ERROR, INFO_GET_PENDING
} from "../action/action";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};
const indexState = {}

export const rootReducer = combineReducers({
  auth,
  order,
  item,
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
    case FETCH_INDEX_PENDING:
      return {
      }
    case FETCH_INDEX_SUCCESS:
      return {
        lists: action.lists
      }
    case FETCH_INDEX_ERROR:
      return {}
    default:
      return state
  }
}

function alertReducer(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: action.type,
        message: action.message,
        show : action.show
      };
    case ERROR:
      return {
        type: action.type,
        message: action.message,
        show : action.show
      };
    case CLEAR:
      return {};
    default:
      return state
  }
}

function item(state={},action) {
  switch (action.type) {
    case INFO_GET_SUCCESS:
      return{
        data: action.data,
        loading: false,
      }
    case INFO_GET_PENDING:
      return {
        data : {},
        loading : true
      }
    default:
      return state
  }
}
