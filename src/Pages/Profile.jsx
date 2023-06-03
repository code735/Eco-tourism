import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Redux/actionTypes';
import swan from '../Images/swan.jpg';
import Navbar from '../components/Navbar.jsx/Navbar';

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const [localStorageUser, setLocalStorageUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setLocalStorageUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    localStorage.clear()
  };

  useEffect(() => {
    if (localStorageUser) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const displayUser = localStorageUser || user;

  return (
    <Box width={'100vw'} height={'100vh'} background={`url(${swan})`} backgroundSize={'cover'} backgroundPosition={'center'} padding={'3%'}>
      <Navbar />
      <Flex className="profile-content" padding={'3% 0'}>
        <Box className="profile-box" borderRadius={'20px'} padding={'20px'} background={'#00000061'}>
          <Flex className="profile-name-and-img" alignItems={'center'} gap={'20px'}>
            <Image src={displayUser ? displayUser.picture : ""} borderRadius={'100%'} width={'70px'} alt="" />
            <div className="name-and-email">
              <Heading color={'white'} fontSize={'1.5rem'} fontWeight={'600'}>{displayUser ? displayUser.name : ""}</Heading>
              <Text color={'white'}>{displayUser ? displayUser.email : ""}</Text>
            </div>
          </Flex>
          <Button
            background={'transparent'}
            border={'2px solid white'}
            color={'white'}
            onClick={handleLogout}
            _hover={{
              color: "black",
              background: "white"
            }}
            width={'100%'}
            margin={'15% 0'}
            marginBottom={'2%'}
          >
            Logout
          </Button>
        </Box>

        <Flex className="cart" flexDirection={'column'}>
          {/* Render the user's cart content here */
          
          }
        </Flex>
      </Flex>
    </Box>
  );
}
