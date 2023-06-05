import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Redux/actionTypes';
import swan from '../Images/swan.jpg';
import Navbar from '../components/Navbar.jsx/Navbar';
import { BOOKING_DATA_FUNCTION } from '../Redux/action';
import CityComponent from '../components/City/CityComponent';

export default function Profile() {
  const dispatch = useDispatch();
  
  const { user,wishlistArray } = useSelector(state => state);
  const [localStorageUser, setLocalStorageUser] = useState(null);
  const [filteredArray, setfilteredArray] = useState()

  useEffect(() => {
    const storedUser = localStorage.getItem('user_obj');
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

useEffect(()=>{
  const temp = wishlistArray.filter((el)=>el.wishlist);
  setfilteredArray(temp);
},[filteredArray])

const toggleWishlist = (index) => {
  const updatedState = [...filteredArray];
  updatedState[index].wishlist = !updatedState[index].wishlist;
  setfilteredArray(updatedState);
};

  const displayUser = localStorageUser || user;

  return (
    <Box width={'100vw'} height={'100vh'} background={`url(${swan})`} backgroundSize={'cover'} backgroundPosition={'center'} padding={'3%'}>
      <Navbar />
      <Flex className="profile-content" padding={'3% 0'} gap={'5%'}>

        <Box color={'white'}>
          <Heading as={'h1'} pb={'5%'} fontFamily={'Italiana, serif'} fontWeight={'300'}>Profile Data</Heading>
          <Box className="profile-box" borderRadius={'20px'} padding={'20px'} background={'#00000061'} height={'35vh'}>
          <Flex className="profile-name-and-img" alignItems={'center'} gap={'20px'}>
            <Image src={displayUser ? displayUser.picture : ""} borderRadius={'100%'} width={'70px'} alt="" />
            <div className="name-and-email">
              <Heading color={'white'} fontSize={'1.5rem'} fontWeight={'600'} fontFamily={'Italiana, serif'}>{displayUser ? displayUser.name : ""}</Heading>
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
        </Box>

        <Box color={'white'}>
          <Heading as={'h1'} pb={'3%'} fontFamily={'Italiana, serif'} fontWeight={'300'}>Wishlist</Heading>
          <SimpleGrid 
          className="cart" 
          flexDirection={'column'} 
          gap={'20px'} 
          height={'62vh'} 
          overflowY={'scroll'} 
          background={'#00000061'} 
          padding={'20px'} 
          borderRadius={'20px'} 
          width={'700px'}
          templateColumns={'repeat(2,1fr)'}
          >
            {/* Render the user's cart content here */}
            {filteredArray && filteredArray.length!=0 ? <CityComponent data={filteredArray} dispatch={dispatch} BOOKING_DATA_FUNCTION={BOOKING_DATA_FUNCTION} toggleWishlist={toggleWishlist}/>  : <Heading fontFamily={'Italiana, serif'} fontWeight={'300'}>No Data Available</Heading>}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
