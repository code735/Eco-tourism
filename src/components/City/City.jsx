import React from 'react';
import { useEffect, useState } from 'react';
import data from '../../db.json'
import { Link } from "react-router-dom";
import { Flex ,Box,Heading, Text, grid, Spinner} from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKING_DATA_FUNCTION, SEND_DATA_FUNCTION } from '../../Redux/action';
import { BOOKING_DATA } from '../../Redux/actionTypes';

const City = () => {

    const [state, setState] = useState();
    const dispatch = useDispatch();
    const {cityData} = useSelector(state=>state)

    useEffect(()=>{
        axios.get(`https://eco-tourism-backend.onrender.com/city`)
        .then((Response)=>{
            dispatch(SEND_DATA_FUNCTION(Response.data));
        })
        
        setState(cityData)
    },[])

    useEffect(()=>{
        setState(cityData)
    },[cityData])

    return (


        <Box 
        style={{gap:"20px"}} 
        display={'grid'} 
        gridTemplateColumns={'repeat(2,1fr)'} 
        color={'white'}
        padding={'3% 0'}
        width={'50%'}
        margin={'auto'}
        marginTop={'7%'}
        paddingBottom={0}
        overflowY={'scroll'}
        className='explore-dest'
        height={'80vh'}
        position={'relative'}
        >
            {
                state?state.map((ele,index) => {
                    return <Link to={`/city/${ele.id}`} key={index} onClick={()=>{
                        dispatch(BOOKING_DATA_FUNCTION(ele));
                    }}>
                        <Box textAlign={'center'}>
                            <Box position={'relative'}>
                                <img src={ele.image} alt="" style={{
                                    height:"200px",
                                    width:"100%",
                                    borderRadius:"20px"
                                }}/>
                                <Heading textTransform={'capitalize'} fontSize={'1rem'} position={'absolute'} top={'0'} left={'0'} background={'white'} padding={'5px 20px'} color={'black'} borderTopLeftRadius={'10px'} borderBottomRightRadius={'10px'}>{ele.terrain}</Heading>
                            </Box>
                            <Flex justifyContent={'space-between'}>
                                <Heading as='h3' padding={'5px'} borderRadius={'10px'} width={'100px'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} fontWeight={'500'} size='sm' mt={'2%'} textTransform={'capitalize'}>{ele.cityname}</Heading>
                                <Heading as='h3' padding={'5px'} borderRadius={'10px'} width={'150px'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} fontWeight={'500'} size='sm' mt={'2%'} textTransform={'capitalize'}>Approx: ₹{ele.price}</Heading>
                            </Flex>
                        </Box>
                    </Link>
                }) : <Spinner width={'100px'} height={'100px'} position={'absolute'} left={'45%'} top={'45%'}/>
            }

        </Box>
    )
}

export default City