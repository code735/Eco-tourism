import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Flex ,Box,Heading, Text, grid} from '@chakra-ui/react';


const City = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/city")
            .then((res) => {
                setState(res.data);
                // console.log(res.data);
            })
    }, [])



    return (


        <Box 
        style={{gap:"20px"}} 
        display={'grid'} 
        gridTemplateColumns={'repeat(3,1fr)'} 
        color={'white'}
        padding={'5%'}
        width={'78%'}
        margin={'auto'}
        >
            {
                state.map((ele) => {
                    return <Link to={`/city/${ele.id}`}>
                        <Box textAlign={'center'}>
                            <img src={ele.image} alt="" />
                            <Heading as='h3' size='sm' >{ele.cityname}</Heading>
                        </Box>
                    </Link>
                })



            }

        </Box>
    )
}

export default City