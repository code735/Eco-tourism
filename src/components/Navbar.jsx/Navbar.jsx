import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Box, 
  Image,
  Flex, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'
import logo from '../../Images/logo.svg'
import { useDispatch } from 'react-redux'
import { SEND_TO } from '../../Redux/actionTypes'
import { HamburgerIcon,AddIcon,ExternalLinkIcon } from '@chakra-ui/icons'

export default function Navbar() {

  const dispatch = useDispatch();

  const handleClick=()=>{
    dispatch({type:SEND_TO,payload:'/city'})
  }

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
        <Flex alignItems={'center'} gap={"20px"} className='nav'>
          <NavLink to={'/city'} style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"1.2rem",
            color:"white",
            textAlign:"left",
          }}
          onClick={handleClick}
          >Destinations</NavLink>
          <NavLink to={'/about'}  style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"1.2rem",
            color:"white",
            textAlign:"left",
          }}>About Us</NavLink>
          <NavLink to={'/profile'}  style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"1.2rem",
            color:"white",
            textAlign:"left",
          }}
          onClick={()=>{
            dispatch({type:SEND_TO,payload:'/profile'})
          }}
          >Profile</NavLink>
        </Flex>
        <Menu className='menu'>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            className='IconButton'
          />
            <MenuList>
              <MenuItem>
                Destinations
              </MenuItem>
              <MenuItem>
                About Us
              </MenuItem>
              <MenuItem>
                Profile
              </MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}
