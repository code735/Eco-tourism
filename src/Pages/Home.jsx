import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import home from '../Images/home.svg'
import circle from '../Images/home_design.png'

export default function Home() {
  return (
    <Box 
    background={`url(${home})`}
    backgroundRepeat={'no-repeat'}
    backgroundPosition={'center'}
    backgroundSize={'cover'}
    height={'100vh'}
    width={'100vw'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'flex-end'}
    position={'relative'}
    gap={'5%'}
    padding={'5%'}
    overflow={'hidden'}
    >
      <Box width={'100%'} height={'100%'} position={'absolute'} top={'0'} left={'0'} background={'#0000006e'}></Box>
      <Image src={`${circle}`} position={'absolute'} right={'-13%'} bottom={'-27%'} width={'33%'}/>
      
      <Box position={'relative'} width={'80%'}>
        <h4 className="italiana" style={{
        fontFamily:'Italiana, serif',
        fontWeight:'100',
        fontSize:"2.8rem",
        color:"white",
        textAlign:"left",
        width:"50%"
        }}>Sustainable Nature Adventures Await!
        </h4>

        <h5
          style={{
            fontFamily:'Estonia,cursive',
            fontWeight:'100',
            fontSize:"2rem",
            width:"85%",
            color:"white",
            textAlign:"left"
            }}>
              Embrace the essence of eco-tourism as you escape the hectic pace of city life and embark on a journey into the serene realm of sustainable farmlands. Discover the hidden treasures of our biodiverse landscapes, where you can engage in immersive experiences that bridge the gap between nature and culture.
        </h5>
      </Box>

    </Box>
  )
}
