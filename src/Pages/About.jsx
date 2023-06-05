import React from 'react';
import Navbar from '../components/Navbar.jsx/Navbar';
import about from '../Images/home.jpg'
import { Box } from '@chakra-ui/react';

const About = () => {
  const headingStyle = {
    fontFamily: 'Italiana, serif',
    color:'white',
    textAlign:"left",
    fontSize:"2.5rem",
    padding:"2% 0"
  };

  const paraStyle = {
    fontFamily: 'Estonia, cursive',
    color:'white',
    fontSize:"2.1rem",
    padding:"2% 0"
  };

  return (
    <Box
    background={`url(${about})`}
    width={'100vw'}
    height={'100vh'}
    backgroundPosition={'center'}
    backgroundSize={'cover'}
    backgroundRepeat={'no-repeat'}
    padding={'3%'}
    position={'relative'}
    >
      <Box 
      width={'100%'}
      height={'100%'}
      position={'absolute'}
      top={'0'}
      left={'0'}
      background={'#000000a3'}
      ></Box>
      <Navbar/>
      <Box
      position={'relative'}
      zIndex={'1'}
      >
        <h1 style={headingStyle}>About Us</h1>
        <p style={paraStyle}>
          At Indian Ecotourism, we are passionate about promoting sustainable travel
          and showcasing the incredible natural beauty and cultural heritage of India.
          Our mission is to create memorable and meaningful experiences for travelers
          while preserving and protecting the environment and supporting local communities.
        </p>
        <p style={paraStyle} className='about-use-second-para'>
          India, with its diverse ecosystems, stunning landscapes, and rich biodiversity,
          offers a wealth of opportunities for ecotourism enthusiasts. From the majestic
          mountains of the Himalayas to the lush green rainforests of the Western Ghats,
          from the serene backwaters of Kerala to the vast deserts of Rajasthan, our
          country is a paradise for nature lovers.
        </p>
      </Box>
    </Box>
  );
};

export default About;
