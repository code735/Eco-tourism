import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Text, grid, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKING_DATA_FUNCTION, SEND_DATA_FUNCTION, WISHLIST_ARRAY_FUNCTION } from '../../Redux/action';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import CityComponent from './CityComponent';

const City = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const { cityData } = useSelector(state => state);

  useEffect(() => {
    axios.get(`https://eco-tourism-backend.onrender.com/city`)
      .then((Response) => {
        dispatch(SEND_DATA_FUNCTION(Response.data));
      });

    setState(cityData);
  }, []);

  useEffect(() => {
    setState(cityData);
  }, [cityData]);

  useEffect(()=>{
    dispatch(WISHLIST_ARRAY_FUNCTION(state));
  },[state])

  const toggleWishlist = (index) => {
    const updatedState = [...state];
    updatedState[index].wishlist = !updatedState[index].wishlist;
    setState(updatedState);
  };

  return (
    <Box
      style={{ gap: "20px" }}
      display={'grid'}
      gridTemplateColumns={'repeat(2,1fr)'}
      color={'white'}
      padding={'3% 0'}
      width={'50%'}
      margin={'auto'}
      marginTop={'7%'}
      paddingBottom={0}
      overflowY={'scroll'}
      className='explore-dest'
      height={'80vh'}
      position={'relative'}
    >
      {state ? <CityComponent data={state} dispatch={dispatch} BOOKING_DATA_FUNCTION={BOOKING_DATA_FUNCTION} toggleWishlist={toggleWishlist}/>  : <Spinner width={'100px'} height={'100px'} position={'absolute'} left={'45%'} top={'45%'} />}
    </Box>
  );
};

export default City;