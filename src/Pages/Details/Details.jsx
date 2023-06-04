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
    <Box className='main-box' 
    background={`url(${city.image})`}  
    backgroundSize={'cover'} 
    backgroundPosition={'center'}
    height={'100vh'}
    overflowY={'scroll'}
    overflowX={'hidden'}
    >
      <Box background={'transparent'} position={'absolute'} zIndex={'2'} padding={'2% 3%'} width={'100%'}>
        <Navbar/>
      </Box>
      <header className='banner'
        style={{
          position:'relative'
        }}>
        <div className='banner-contents'>
          <Center>
          <Heading 
          as={'h1'} 
          className='banner-title' 
          textTransform={'capitalize'}
          fontSize={'6.5rem'}
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
        <Box  style={{margin:"40px"}}>
          <About about={city.about}/>
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Camping />
        <Map/>
        
      </Box>
    </Box>

  )
}

export default Details