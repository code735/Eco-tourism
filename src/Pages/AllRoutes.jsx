import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Payment from './Payment'
import Login from './Login'
import Plan_trip from './Plan_trip'
import Explore_destinations from './Explore_destinations'
import City from '../components/City/City'
import Details from './Details/Details'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/city' element={<City/>}/>
          <Route path='/city/:id' element={<Details/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/plan-a-trip' element={<Plan_trip/>}/>
          <Route path='/explore' element={<Explore_destinations/>}/>
        </Routes>
    </div>
  )
}
