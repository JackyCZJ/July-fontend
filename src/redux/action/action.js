import Config from 'Config'
import {history}  from '../unity';
import types from "less/lib/less/functions/types";
import {func} from "prop-types";
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
export const INFO_GET_SUCCESS = "INFO_GET_SUCCESS"
export const INFO_GET_PENDING = "INFO_GET_PENDING"
export const SUCCESS ='success'
export const ERROR = 'error'
export const CLEAR = 'destroy'

const apiurl = Config.baseURL+"/api/v1"

function alertError(message) {
  return {
    type: ERROR,
    message : message,
    show: true
  }
}

function alertInfo(message) {
  return {
    type: SUCCESS,
    message: message,
    show: true
  }
}

export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem("user"));
  if (token) {
    return { Authorization : "Bearer " + token.token };
  } else {
    return {};
  }
}


export function login(user,redirect) {
  return dispatch =>{
    dispatch(request(user));
    fetch(Config.baseURL+"/user/login",{ method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(handleResponse)
        .then(res=>{
          dispatch(success(res));
          dispatch(alertInfo("登录成功"))
          res.username = user.username;
          localStorage.setItem("user",JSON.stringify(res));
          if (redirect === undefined){
            redirect = "/"
            history.go(redirect)
          }
          history.push(redirect)
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


export function logout() {
  // remove user from local storage to log user
  let u = localStorage.getItem("user")
  if (u) {
    fetch(Config.baseURL+"/user/logout",
        {
          method: 'POST',
          headers: authHeader(),
          body: JSON.stringify(u)}).then(res=>{
    })
  }

  localStorage.removeItem("user");
  return {
    type: LOGOUT
  };
}

export function indexList() {
  return dispatch =>{
    dispatch(IndexGetPending());
    fetch(apiurl+"/Goods/index",{
      method: 'GET',
      headers: authHeader(),
    }).then(handleResponse)
        .then((res)=>{
          dispatch(IndexGetSuccess(res.data))
      }).catch(e=>{
          dispatch(IndexGetFail(e))
      })

  }

  function IndexGetPending() {return {type: FETCH_INDEX_PENDING, isFetching: true,}}

  function IndexGetSuccess(item) {return{type: FETCH_INDEX_SUCCESS, lists: item}}

  function IndexGetFail(e) {return {type: FETCH_INDEX_ERROR, error : e}}
}



export function GoodsInfo(id){
  return dispatch =>{
    dispatch(infoGetFetching())
    fetch(apiurl+"/Goods/"+id,{
      method: "GET"
    },).then(handleResponse)
        .then(res=>{
          dispatch(infoGetSuccess(res.data))
        }).catch(e=>{
          dispatch(alertError(e))
    })
  }

  function infoGetFetching(){
    return {
      type: INFO_GET_PENDING,
      loading : true
    }
  }
  function infoGetSuccess(data) {
    return {
      type: INFO_GET_SUCCESS,
      data : data,
      loading : false
    }
  }
}
function doLogin() {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}

export function getUrlParam(name) {
  let queryString = window.location.search.split('?')[1] || '',
      reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
      result = queryString.match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        doLogin()
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export function autoComplete(value) {
    return fetch(apiurl+"/Goods/suggestion/"+value,{
      method:"GET",
      headers: authHeader(),
    }).then(handleResponse)
}
