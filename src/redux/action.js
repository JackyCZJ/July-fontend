import Config from 'Config'
import {history}  from './unity';
export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";
export const LOGOUT = "USERS_LOGOUT";
export const REGISTER_REQUEST = "USERS_REGISTER_REQUEST";
export const REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
export const REGISTER_FAILURE = "USERS_REGISTER_FAILURE";
export const OrderCreate = "USERS_OrderCreate";
export const OrderDelete = "USERS_OrderDelete";
export const OrderComplete = "USERS_OrderComplete";
export const IndexItemSuccess = "INDEX_GET_SUCCESS"
export const IndexItemFail = "INDEX_GET_FAIL"
export const FETCH_INDEX_PENDING = 'FETCH_INDEX_PENDING';
export const FETCH_INDEX_SUCCESS = 'FETCH_INDEX_SUCCESS';
export const FETCH_INDEX_ERROR = 'FETCH_INDEX_ERROR';
export const SUCCESS ='SUCCESS'
export const ERROR = 'ERROR'
export const CLEAR = 'CLEAR'

const apiurl = Config.baseURL+"/api/v1"

export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem("user"));
  console.log(token)

  if (token) {
    return { Authorization : "Bearer " + token.token };
  } else {
    return {};
  }
}


function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isAuthenticated: false,
    message
  };
}


export function login(user) {
  return dispatch =>{
    dispatch(request(user));
    fetch(Config.baseURL+"/user/login",{ method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(handleResponse)
        .then(res=>{
          dispatch(success(res));
          res.username = user.username;
          localStorage.setItem("user",JSON.stringify(res));
          history.go("/")
        })
        .catch(e=>{
          dispatch(failure(e));
          dispatch(alertError(e));
          alert(e)
        });
    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
  }

}

function alertError(message) {
    return {
      type: ERROR,
      message : message
    }
}

function alertInfo(message) {
  return {
    type: SUCCESS,
    message: message
  }
}



export function logout() {
  // remove user from local storage to log user
  let u = localStorage.getItem("user")
  if (u) {
    fetch(Config.baseURL+"/user/logout",
        {
          method: 'POST',
          headers: authHeader(),
          body: JSON.stringify(u)}).then(res=>{
      if (res.ok){
        console.log("logout!")
      }
    })
  }

  localStorage.removeItem("user");
  return {
    type: LOGOUT
  };
}

export function indexList() {
  console.log("now I'm here");
  return dispatch =>{
    dispatch(IndexGetPending());
    console.log("now I'm there");
    fetch(apiurl+"/Goods/index",{
      method: 'GET',
      headers: authHeader(),
    }).then(handleResponse)
        .then((res)=>{
          dispatch(IndexGetSuccess(res.data))
      }).catch(e=>{
          dispatch(IndexGetFail(e))
          console.log(e)
      })

  }

  function IndexGetPending() {return {type: FETCH_INDEX_PENDING, isFetching: true,}}

  function IndexGetSuccess(item) {return{type: FETCH_INDEX_SUCCESS, lists: item}}

  function IndexGetFail(e) {return {type: FETCH_INDEX_ERROR, error : e}}
}
export function success(message) {
  return { type: SUCCESS, message };
}

export function error(message) {
  return { type: ERROR, message };
}

export function clear() {
  return { type: CLEAR };
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
