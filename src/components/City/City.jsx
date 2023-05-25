import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Flex ,Box,Heading, Text} from '@chakra-ui/react';


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


        <Flex style={{gap:"20px"}}>
            {
                state.map((ele) => {
                    return <Link to={`/city/${ele.id}`}>
                        <Box>
                            <Heading as='h3' size='lg' >{ele.cityname}</Heading>
                            <img src={ele.image} style={{width:"100px", height: "100px"}} alt="" />
                        </Box>
                    </Link>
                })



            }

        </Flex>
    )
}

export default City