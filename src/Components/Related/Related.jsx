import React from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,Text
} from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useState } from 'react';
import "./Related.css"
const Related = () => {

    const [related, setRelated] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/related")
            .then((res) => {
                setRelated(res.data);
            })
    }, [])


    return (
        <Box>
            <Heading as='h4' size='md' style={{marginLeft:"-1200px"}}>
                Related
            </Heading>&nbsp;&nbsp;&nbsp;&nbsp;
            <SimpleGrid columns={4} spacing={5}>
      
            {
                related.length > 0 && related.map((ele) => {
                    return (
                        <Box className="related-box"  key={ele.id} p={4} borderWidth='1px' borderColor='gray.200' rounded='lg'>
                            <img src={ele.image} alt={ele.title} />
                            <Box className='right-box'>
                                <Heading as='h3' size='lg' >{ele.title}</Heading>
                                <Text>{ele.location}</Text>
                                <Heading as='h3' size='sm' style={{lineHeight:"3",margin:"5px"}} >From ₹{ele.price}/per person</Heading>
                            </Box>
                        </Box>
                    )
                })
            }
            </SimpleGrid>

        </Box>
    )
}

export default Related