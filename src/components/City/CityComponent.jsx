import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const CityComponent = ({ data, dispatch, BOOKING_DATA_FUNCTION, toggleWishlist }) => {
  return (
    <>
      {data.map((ele, index) => (
        <Box key={index} textAlign="center" color={'white'}>
          <Box position="relative">
            <Link to={`/city/${ele.id}`} onClick={() => dispatch(BOOKING_DATA_FUNCTION(ele))}>
              <img
                src={ele.image}
                alt=""
                style={{
                  height: '200px',
                  width: '100%',
                  borderRadius: '20px',
                }}
              />
            </Link>
            <Heading
              textTransform="capitalize"
              fontSize="1rem"
              position="absolute"
              top="0"
              left="0"
              background="white"
              padding="5px 20px"
              color="black"
              borderTopLeftRadius="10px"
              borderBottomRightRadius="10px"
            >
              {ele.terrain}
            </Heading>
            <Box
              textTransform="capitalize"
              fontSize="1.2rem"
              position="absolute"
              top="0"
              right="0"
              background="white"
              padding="5px 20px"
              color="black"
              borderTopRightRadius="10px"
              borderBottomLeftRadius="10px"
              className={`wishlist ${ele.wishlist ? 'active' : ''}`}
              onClick={() => toggleWishlist(index)}
            >
              {ele.wishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </Box>
          </Box>
          <Flex justifyContent="space-between">
            <Heading
              as="h3"
              padding="5px"
              borderRadius="10px"
              width="100px"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight="500"
              size="sm"
              mt="2%"
              textTransform="capitalize"
            >
              {ele.cityname}
            </Heading>
            <Heading
              as="h3"
              padding="5px"
              borderRadius="10px"
              width="150px"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight="500"
              size="sm"
              mt="2%"
              textTransform="capitalize"
            >
              Approx: ₹{ele.price}
            </Heading>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default CityComponent;
