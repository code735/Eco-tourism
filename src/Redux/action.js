// loginActions.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SEND_TO,
    SEND_DATA,
    BOOKING_DATA,
    WISHLIST_ARRAY
  } from './actionTypes';
  
  export const loginRequest = () => {
    return {
      type: LOGIN_REQUEST
    };
  };
  
  export const loginSuccess = (user) => {
    return {
      type: LOGIN_SUCCESS,
      payload: user
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: LOGIN_FAILURE,
      payload: error
    };
  };
  
  export const logout = () => {
    return {
      type: LOGOUT
    };
  };


  export const SEND_TO_FUNCTION=(payload)=>{
    return {
      type:SEND_TO,
      payload:payload
    }
  }

  export const SEND_DATA_FUNCTION=(payload)=>{
    return{
      type:SEND_DATA,
      payload:payload
    }
  } 



  export const BOOKING_DATA_FUNCTION=(payload)=>{
    return{
      type:BOOKING_DATA,
      payload:payload
    }
  }

  export const WISHLIST_ARRAY_FUNCTION=(payload)=>{
    return{
      type:WISHLIST_ARRAY,
      payload
    }
  }