import React from 'react'
import {Box,Heading,SimpleGrid,Text} from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useState } from 'react';

const Camping = () => {
    const [camping, setCamping] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/camping")
            .then((res) => {
                setCamping(res.data);
            })
    }, [])
  return (
   <Box>
        <Heading as='h4' size='md' style={{marginLeft:"-1200px"}}>
                Camping
            </Heading>&nbsp;&nbsp;&nbsp;&nbsp;

            <SimpleGrid columns={3} spacing={10}>
      
            {
                camping.length > 0 && camping.map((ele) => {
                    return (
                        <Box  key={ele.id}  borderWidth='1px' borderColor='gray.200' >
                            <img src={ele.image} alt={ele.title} />
                            <Box className='right-box'>
                                <Heading as='h3' size='md' >{ele.title}</Heading>
                                <Text fontSize='md'>{ele.about}</Text>
                                <Heading as='h3' size='sm' style={{lineHeight:"3",margin:"5px"}} >From ₹{ele.price}/per person</Heading>
                            </Box>
                        </Box>
                    )
                })
            }
            </SimpleGrid>
            &nbsp;&nbsp;&nbsp;&nbsp;

   </Box>
  )
}

export default Camping