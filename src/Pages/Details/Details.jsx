import React from 'react'
import "./Details.css"
import { Button, Box, Heading, SimpleGrid ,Center, Flex} from '@chakra-ui/react'
import Related from '../../components/Related/Related'
import About from '../../components/About/About'
import Camping from '../../components/Camping/Camping'
import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from "axios";
import Bottom from '../../components/Bottom/Bottom'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar.jsx/Navbar'
import { Link } from 'react-router-dom'



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
          fontFamily={'Italiana, serif'}
          >{city.cityname}</Heading>
          </Center>
        </div>
        <div className='banner-buttons'>
          {/* <button className='banner-button'>Book Now</button>
            <button className='banner-button'>Explore</button> */}
         <Center mt={'7%'}>
          <Link to={'/payment'}>
            <Button className='banner-button' background={'transparent'} border={'2px solid white'} _hover={{}}>Book Now</Button>
          </Link>
         </Center>
        </div>
      </header>
      <Box textAlign={'center'} borderRadius={'30px'} margin={'0 5%'} padding={'5% 0'} mb={'4%'} style={{
        backdropFilter:"blur(50px)"
      }}>
        <Heading as={'h2'} fontSize={'3rem'} color={'white'} fontFamily={'Italiana, serif'}>Included in package  . . .</Heading>
        <Flex justifyContent={'center'} p={'5%'} gap={'30px'}>
          {
            city.activity && city.activity.map((ele) => {
              return <Related key={ele.id} {...ele} />
            })
          }
        </Flex>
        <Box  style={{margin:"40px"}}>
          <About about={city.about}/>
        </Box>
        <Map/>        
      </Box>
    </Box>

  )
}

export default Details