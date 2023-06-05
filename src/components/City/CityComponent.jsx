import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex, useToast } from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const CityComponent = ({ data, dispatch, BOOKING_DATA_FUNCTION, toggleWishlist }) => {

  const toast = useToast();

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
              background="blackAlpha.700"
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
              background="blackAlpha.700"
              padding="5px 20px"
              color={ele.wishlist ?"white":"darkgray"}
              borderTopRightRadius="10px"
              borderBottomLeftRadius="10px"
              className={`wishlist ${ele.wishlist ? 'active' : ''}`}
              onClick={() => {toggleWishlist(index)
                {ele.wishlist ? toast({
                  description: "Package added to wishlist",
                  status: 'success',
                  duration: 2500,
                  isClosable: true,
                }) : toast({
                  description: "Package removed from wishlist",
                  status: 'error',
                  duration: 2500,
                  isClosable: true,
                })}
              }}
            >
              {ele.wishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </Box>
            <Heading
              as="h3"
              padding="10px"
              borderRadius="30px"
              width="100%"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight="800"
              fontFamily={'Italiana, serif'}
              mt="2%"
              color={'black'}
              fontSize={'1.1rem'}
              textTransform="capitalize"
              position={'absolute'}
              bottom={'0'}
              background={'#b1b1b1'}
              borderBottomLeftRadius={'5px'}
              borderBottomRightRadius={'5px'}
            >
              Approx Price : ₹{ele.price}
            </Heading>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CityComponent;
