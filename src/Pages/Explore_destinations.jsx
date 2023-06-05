import React from 'react'
import Navbar from '../components/Navbar.jsx/Navbar'
import { Box } from '@chakra-ui/react'
import Home from '../Images/home.jpg'
import City from '../components/City/City'
import { Preloader } from '../components/Preloader'
import FilterBox from '../components/FilterBox'
import { Link } from 'react-router-dom'

export default function Explore_destinations() {
  return (
    <Box padding={'3%'} 
    background={`url(${Home})`} 
    backgroundPosition={'10% 100%'}
    backgroundSize={'cover'} 
    backgroundRepeat={'no-repeat'}
    w={'100vw'} 
    h={'100vh'}
    position={'relative'}
    >
      <Navbar/>
      <Box width={'100%'} height={'100%'} position={'absolute'} top={'0'} left={'0'} background={'#0000006e'} display={'flex'}>
        <FilterBox/>
        <City/>
      </Box>
    </Box>
  )
}
