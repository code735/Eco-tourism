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
            <Box className="related-box" background={'#0000006b'} padding={'20px'} borderRadius={'10px'}>
                <Image className="poster" src={image} alt={title} borderRadius={'10px'}/>
                <Flex className='right-box' color={'white'} padding={'10px 0'} flexDirection={'column'} gap={'20px'}>
                    <Heading as='h3' fontSize={'1.5rem'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{location}</Heading>
                    <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    >
                        <Button color={'black'} width={'110px'}>Buy</Button>
                        <Button color={'black'} width={'110px'}>Add</Button>
                    </Flex>
                </Flex>
            </Box>


    )
}

export default Related