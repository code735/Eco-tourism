import React from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid, Text, Image, Flex, Button
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import "./Related.css"
import {StarIcon} from "@chakra-ui/icons"



const Related = ({ title, price, location, image ,review}) => {

    let rating=4;


    return (
            <Box className="related-box"borderRadius={'10px'} position={'relative'}>
                <Image className="poster" src={image} alt={title} borderRadius={'10px'}/>
                <Flex className='right-box' 
                color={'white'} 
                padding={'10px 0'} 
                flexDirection={'column'} 
                alignItems={'center'}
                justifyContent={'center'} 
                gap={'20px'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                w={'100%'}
                height={'100%'}
                background={'#0000007a'}
                borderRadius={'10px'}
                >
                    <Heading as='h3' textAlign={'center'} fontSize={'2.4rem'} fontFamily={'Estonia,cursive'} fontWeight={'500'}>{location}</Heading>
                </Flex>
            </Box>
    )
}

export default Related