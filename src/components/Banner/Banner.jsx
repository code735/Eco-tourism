import React from 'react'
import "./Banner.css"
import { Button, Box} from '@chakra-ui/react'
import Related from '../Related/Related'
import About from '../About/About'
import Camping from '../Camping/Camping'

const Banner = () => {
  return (
    <div className='main-box'>
      <header className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://images.pexels.com/photos/3076431/pexels-photo-3076431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed"
        }}>
        <div className='banner-contents'>
          <h1 className='banner-title'>RANIPURAM HILLS</h1>
        </div>
        <div className='banner-buttons'>
          {/* <button className='banner-button'>Book Now</button>
            <button className='banner-button'>Explore</button> */}
          <Button className='banner-button' colorScheme='pink'>Book Now</Button>
          <Button className='banner-button' colorScheme='pink' >EXPLORE</Button>
        </div>
      </header>
      <Box>
      <Camping/>   &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
      <About/>&nbsp;&nbsp;&nbsp;&nbsp;
      <Related/>
      </Box>
    </div>

  )
}

export default Banner