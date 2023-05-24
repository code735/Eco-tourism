import React from 'react'
import { Navigate } from 'react-router';

export default function PrivateRoute({children}) {
 const isAuth = true;
 
 if(!isAuth){
   return <Navigate to='/login' />
 }
 return children;
}
