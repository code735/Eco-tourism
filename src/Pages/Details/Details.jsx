import React from 'react'
import "./Details.css"
import { Button, Box, Heading, SimpleGrid ,Center} from '@chakra-ui/react'
import Related from '../../components/Related/Related'
import About from '../../components/About/About'
import Camping from '../../components/Camping/Camping'
import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from "axios";
import Bottom from '../../components/Bottom/Bottom'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar.jsx/Navbar'



const Details = () => {


  const [city, setCity] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://eco-tourism-backend.onrender.com/city/${id}`)
      .then((res) => {
        setCity(res.data);
        console.log(city);
      })
  }, [])


  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className='main-box'>
      <Box background={'transparent'} position={'absolute'} zIndex={'2'} padding={'2% 3%'} width={'100%'}>
        <Navbar/>
      </Box>
      <header className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${city.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position:'relative',
          zIndex:"1"
        }}>
          <Box position={'absolute'} zIndex={'-1'} top={'0'} left={'0'} width={'100vw'} height={'100vh'} background={'#0000008f'}></Box>
        <div className='banner-contents'>
          <Center>
          <Heading 
          as={'h1'} 
          className='banner-title' 
          textTransform={'capitalize'}
          >{city.cityname}</Heading>
          </Center>
        </div>
        <div className='banner-buttons'>
          {/* <button className='banner-button'>Book Now</button>
            <button className='banner-button'>Explore</button> */}
         <Center mt={'7%'}>
          <Button className='banner-button' background={'transparent'} border={'2px solid white'} _hover={{}}>Book Now</Button>
          <Button className='banner-button' background={'transparent'} border={'2px solid white'} _hover={{}} onClick={handleClick} >EXPLORE</Button>
         </Center>
        </div>
      </header>
      <Box>

        <Heading as='h4' size='md' style={{ marginLeft: "-1100px", paddingTop: "20px" }}>
          PLACES TO EXPLORE
        </Heading>&nbsp;&nbsp;&nbsp;&nbsp;
        <SimpleGrid columns={4} spacing={5} m={10}>
          {
            city.activity && city.activity.map((ele) => {
              return <Related key={ele.id} {...ele} />
            })
          }
        </SimpleGrid>
        <Box ref={ref}>
        <Bottom />
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Box  style={{margin:"40px"}}>
          <About about={city.about}/>
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Camping />
        <Map/>
        
      </Box>
    </div>

  )
}

export default Details