import React, { useState, useEffect } from 'react'
import { Image, Text, Box, useToast } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/system';
import { useNavigate } from 'react-router';
import logo from "../../Images/logo.svg"
import home from '../../Images/home.jpg'
// import PreLoader from '../PreLoader';
import { Preloader } from '../../components/Preloader';

export default function PaymentSucces() {
    function generateRandomId() {
        // Generate a random 6-digit number between 100000 and 999999
        const randomId = Math.floor(Math.random() * 900000) + 100000;

        return randomId.toString();
    }

    const toast = useToast();
    toast({
        description: "Booking complete !",
        status: 'success',
        duration: 2500,
        isClosable: true,
      })

    const [loading, setLoading] = useState(false)
    const { colormode, togglecolormode } = useColorMode();


    // useEffect(() => {
    //     setLoading(true)
    //     window.addEventListener('load', () => {
    //         setLoading(false);
    //     });
    // }, [])

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    let navigate = useNavigate();

    setTimeout(() => {
        navigate('/')
    }, 5000);

    const ID = generateRandomId();
    return (
        <>{loading ? <Preloader/> : <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: `url(${home})`,
            backgroundSize: "cover",
            position: "absolute",
            top: "0",
            left: "0",
        }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                p={20}
                style={{
                    backdropFilter:"blur(20px)"
                }}
                borderRadius={30}
            >
                <Image src={logo} width='200px' />
                <Text fontWeight='bold' fontSize='3rem' color={'white'} fontFamily={'Italiana, serif'}>Your Package is Booked !</Text>
                <Text fontWeight='bold' fontSize='2rem' fontFamily={'Italiana, serif'} color={'white'}>Booking ID : #{ID}</Text>
            </Box>
        </div>}</>
    )
}
