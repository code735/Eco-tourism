import React from 'react';
import { useEffect, useState } from 'react';
import data from '../../db.json'
import { Link } from "react-router-dom";
import { Flex ,Box,Heading, Text, grid} from '@chakra-ui/react';
import axios from 'axios';

const City = () => {

    const [state, setState] = useState([]);

    useEffect(()=>{
        axios.get(`https://eco-tourism-backend.onrender.com/city`)
        .then((Response)=>{
            setState(Response.data)
        })
    },[])

    return (


        <Box 
        style={{gap:"20px"}} 
        display={'grid'} 
        gridTemplateColumns={'repeat(2,1fr)'} 
        color={'white'}
        padding={'5%'}
        width={'50%'}
        margin={'auto'}
        marginTop={'5%'}
        paddingBottom={0}
        overflowY={'scroll'}
        className='explore-dest'
        height={'80vh'}
        >
            {
                state.map((ele,index) => {
                    return <Link to={`/city/${ele.id}`} key={index}>
                        <Box textAlign={'center'}>
                            <img src={ele.image} alt="" style={{
                                borderRadius:"20px"
                            }}/>
                            <Heading as='h3' size='sm' mt={'2%'}>{ele.cityname}</Heading>
                        </Box>
                    </Link>
                })



            }

        </Box>
    )
}

export default City