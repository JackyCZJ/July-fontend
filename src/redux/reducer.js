import { combineReducers } from 'redux'
import{LOGIN_REQUEST ,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT } from './action'


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const rootReducer = combineReducers({
    auth,
    order,
    picture,
    cart
})

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
      return state
  }
}

function order(state= {},action){
    switch (action.type){

    }
}

function picture(state= {},action){

}

function cart(state= {},action){
    switch (action.type){

    }
}