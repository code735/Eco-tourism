import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Image,Flex } from '@chakra-ui/react'
import logo from '../../Images/logo.svg'

export default function Navbar() {

  return (
    <Box 
    position={'relative'} 
    zIndex={'1'} 
    display={'flex'} 
    alignItems={'center'} 
    justifyContent={'space-between'}>
        <NavLink to={'/'}>
          <Image src={logo} width={'50px'}/>
        </NavLink>
        <Flex alignItems={'center'} gap={"20px"}>
          <NavLink to={'/explore'} style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"1.2rem",
            color:"white",
            textAlign:"left",
          }}>Destinations</NavLink>
          <NavLink to={'/about'}  style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"1.2rem",
            color:"white",
            textAlign:"left",
          }}>About Us</NavLink>
        </Flex>
    </Box>
  )
}
