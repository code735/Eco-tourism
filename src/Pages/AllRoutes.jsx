import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Payment from './Payment/Payment'
import Login from './Login'
import Plan_trip from './Plan_trip'
import Explore_destinations from './Explore_destinations'
import PrivateRoute from './PrivateRoute'
import About from './About'
import Profile from './Profile'
import City from '../components/City/City'
import Details from './Details/Details'
import PaymentSucces from './Payment/PaymentSucces'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/city' element={
            <PrivateRoute>
              <Explore_destinations/>     
            </PrivateRoute>
          }/>
          <Route path='/city/:id' element={<Details/>}/>
          <Route path='/payment' element={
              <Payment/>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/plan-a-trip' element={
            <PrivateRoute>
              <Plan_trip/>
            </PrivateRoute>
          }/>
          
          <Route path='/profile' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path='/success' element={<PaymentSucces/>}/>
        </Routes>
      
    </div>
  )
}
