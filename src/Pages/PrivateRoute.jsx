import React, { useEffect } from 'react'
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function PrivateRoute({children}) {
  // redux
   const {isAuthenticated} = useSelector(state=>state)
  // redux
  console.log(isAuthenticated)
 
  useEffect(()=>{
  console.log(isAuthenticated)
  },[isAuthenticated])
 
  if(!isAuthenticated){
   return <Navigate to='/login' />
 }
 return children;
}
