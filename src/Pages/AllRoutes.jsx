import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Payment from './Payment'
import Login from './Login'
import Plan_trip from './Plan_trip'
import Explore_destinations from './Explore_destinations'
import PrivateRoute from './PrivateRoute'
import About from './About'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/payment' element={
            <PrivateRoute>
              <Payment/>
            </PrivateRoute>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/plan-a-trip' element={
            <PrivateRoute>
              <Plan_trip/>
            </PrivateRoute>
          }/>
          <Route path='/explore' element={
            <PrivateRoute>
              <Explore_destinations/>     
            </PrivateRoute>
          }/>
        </Routes>
    </div>
  )
}
