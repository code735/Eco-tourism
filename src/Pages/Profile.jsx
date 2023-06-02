import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../Redux/actionTypes';

export default function Profile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };

  return (
    <div>
      <Button colorScheme='blue' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
