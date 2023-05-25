import React from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid, Text
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import "./Related.css"
import {StarIcon} from "@chakra-ui/icons"



const Related = ({ title, price, location, image }) => {

    let rating=4;


    return (
        <Box >



            <Box className="related-box" p={4} borderWidth='1px' borderColor='gray.200'>
                <img className="poster" src={image} alt={title} />
                <Box className='right-box'>
                    <Heading as='h3' size='lg' noOfLines={2} >{location}</Heading>
                    <Text >{title}</Text>
                    <Heading as='h3' size='sm' style={{ lineHeight: "3", margin: "5px" }} >From <span style={{ color: '#00b5b7' }}>₹{price}</span>/per person</Heading>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < rating ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>25
                             reviews
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Related