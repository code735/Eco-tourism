import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const CityComponent = ({ data, dispatch, BOOKING_DATA_FUNCTION, toggleWishlist }) => {
  return (
    <>
      {data.map((ele, index) => (
        <Box key={index} textAlign="center">
          <Box position="relative">
            <Link to={`/city/${ele.id}`} onClick={() => dispatch(BOOKING_DATA_FUNCTION(ele))}>
              <Heading
                as="h3"
                padding="5px"
                borderRadius="10px"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                fontWeight="500"
                fontFamily={'Italiana, serif'}
                fontSize={'1.4rem'}
                position="absolute"
                width="100%"
                height="100%"
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                top="0"
                left="0"
                bg="#0000009c"
                textTransform="capitalize"
              >
                {ele.cityname}
              </Heading>
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
              background="#0000006b"
              padding="5px 20px"
              color="darkgray"
              borderTopLeftRadius="10px"
              borderBottomRightRadius="10px"
              fontFamily={'Italiana, serif'}
              zIndex={'1'}
            >
              {ele.terrain}
            </Heading>
            <Box
              textTransform="capitalize"
              fontSize="1.2rem"
              position="absolute"
              top="0"
              zIndex={'1'}
              right="0"
              fontFamily={'Italiana, serif'}
              background="#0000006b"
              padding="5px 20px"
              color={ele.wishlist ?"white":"darkgray"}
              borderTopRightRadius="10px"
              borderBottomLeftRadius="10px"
              className={`wishlist ${ele.wishlist ? 'active' : ''}`}
              onClick={() => toggleWishlist(index)}
            >
              {ele.wishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </Box>
          </Box>
          <Flex justifyContent="space-between" alignItems={'center'}>
            <Heading
              as="h3"
              padding="5px"
              borderRadius="10px"
              width="150px"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight="500"
              fontFamily={'Italiana, serif'}
              mt="2%"
              color={'darkgray'}
              fontSize={'1.5rem'}
              textTransform="capitalize"
            >
              ₹{ele.price}
            </Heading>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default CityComponent;
