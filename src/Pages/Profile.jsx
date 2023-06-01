import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../Redux/actionTypes';

export default function Profile() {
  
  const dispatch = useDispatch();
  
  return (
    <div>
      <Button colorScheme='blue'
      onClick={()=>{
        dispatch({type:LOGOUT})
      }}
      >Logout</Button>
    </div>
  )
}
