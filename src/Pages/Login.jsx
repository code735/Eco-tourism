import swan from '../Images/swan.jpg'
import loginLogo from '../Images/login-page-logo.png'
import jwtDecode from 'jwt-decode';
import React, { useEffect} from 'react';
import {Flex,
        Box,
        Image
      } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../Redux/action';

export default function Login() {

  let dispatch = useDispatch();
   // redux
   const {isAuthenticated} = useSelector(state=>state)
  // redux
  console.log(isAuthenticated)

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var user_obj = jwtDecode(response.credential)

    var auth = user_obj.email_verified;
    console.log(user_obj)
    if(auth){
      dispatch(loginSuccess(user_obj))
    }
    else{
      dispatch(loginFailure(user_obj))
    }
  }

  useEffect(() => {
    /*eslint-disable no-undef*/
    google.accounts.id.initialize({
      client_id: '373264275746-eju7u5qlvit8e986i1b552dn49nb0nvt.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    );
    /*eslint-enable no-undef*/
  }, []);

  return (
    <div style={{
      background:`url(${swan})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      width:'100vw',
      height:'100vh',
      overflow:'hidden'
    }}>
      <Flex
      className='signin-and-heading-text-flex-box' 
      >
        <Box width={'50%'} 
        height={'100vh'} 
        display={'flex'} 
        flexDirection={'column'} 
        alignItems={'center'} 
        justifyContent={'space-around'}
        >
          <Image src={loginLogo} w={'250px'}/>
          <div id="signInDiv"></div>
        </Box>
        <Box 
        width={'50%'}
        textAlign={'left'}
        color={'white'}
        className='signin-box-text'
        >
          <h4
          style={{
            fontFamily:'Italiana, serif',
            fontWeight:'100',
            fontSize:"3.2rem",
            width:"50%",
            display:'flex',
          }}
          className='login-heading'
          >Login to an Authentic  eco-tourism Experience</h4>
          <h5
           style={{
            fontFamily:'Estonia,cursive',
            fontWeight:'100',
            fontSize:"2.3rem",
            width:"85%"
          }}
          className='login-para'
          >Step into the enchanting world of eco-tourism and embrace the rustic charm of authentic experiences. Immerse yourself in the beauty of nature as you embark on a sustainable journey.</h5>
        </Box>
      </Flex>
    </div>
  );
}
