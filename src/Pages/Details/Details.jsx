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
import Map from '../../components/Map/Map';
import Booking from '../../components/Booking/Booking'



const Details = () => {


  const [city, setCity] = useState({});
  const [isBook,setBook]=useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/city/${id}`)
      .then((res) => {
        setCity(res.data);
        console.log(city);
      })
  }, [])


  const ref = useRef(null);

  const handleClick = () => {
    setBook(false);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleBook= ()=>{
    setBook(true);

  }

  return (
    <div className='main-box'>
      <header className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${city.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}>
        <div className='banner-contents'>
          <Center>
          <h1 className='banner-title'>{city.cityname}</h1>

          </Center>
        </div>
        <div className='banner-buttons'>
          {/* <button className='banner-button'>Book Now</button>
            <button className='banner-button'>Explore</button> */}
         <Center>
         <Button className='banner-button' colorScheme='pink' onClick={handleBook}>Book Now</Button>
          <Button className='banner-button' colorScheme='pink' onClick={handleClick} >EXPLORE</Button>
         </Center>
        </div>
      </header>
      {
        isBook ? <Booking {...city}/> : <Box>

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
      }
    </div>

  )
}

export default Details