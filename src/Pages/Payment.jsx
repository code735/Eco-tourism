import React from 'react'
import { useSelector } from 'react-redux'

export default function Payment() {
  const {booking_place} = useSelector(state=>state);
  console.log(booking_place)
  return (
    <div>Payment</div>
  )
}
