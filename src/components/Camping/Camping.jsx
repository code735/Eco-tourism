import React from 'react'
import {Box,Heading,SimpleGrid,Text} from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useState } from 'react';

const Camping = () => {
    const [camping, setCamping] = useState([]);

    useEffect(() => {
        axios.get("https://eco-tourism-backend.onrender.com/camping")
            .then((res) => {
                setCamping(res.data);
            })
    }, [])
  return (
   <Box style={{backgroundColor:"#f5f5f5"}}>
        <Heading as='h4' size='md' style={{marginLeft:"-1100px", paddingTop:"20px"}}>
                OUR PACKAGES
            </Heading>&nbsp;&nbsp;&nbsp;&nbsp;

            <SimpleGrid columns={3} spacing={10}>
      
            {
                camping.length > 0 && camping.map((ele) => {
                    return (
                        <Box  key={ele.id} style={{backgroundColor:"whitesmoke"}} borderWidth='1px' borderColor='gray.200' >
                            <img  src={ele.image} alt={ele.title} />
                            <Box className='right-box'>
                                <Heading as='h3' size='md' >{ele.title}</Heading>
                                <Text fontSize='md'>{ele.about}</Text>
                                <Heading as='h3' size='sm' style={{lineHeight:"3",margin:"5px"}} >From <span style={{color:'#00b5b7'}}>₹{ele.price}</span>/per person</Heading>
                            </Box>
                        </Box>
                    )
                })
            }
            </SimpleGrid>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;

   </Box>
  )
}

export default Camping