import React from 'react'
import "./About.css"
import { Box } from '@chakra-ui/react'

const About = ({about}) => {
  return (
    <Box className='main-box' background={'transparent'}>
       <p 
       style={{
        fontFamily:'italiana,serif',
        fontWeight:'100',
        fontSize:"1.5rem",
        color:"white"
        }}
       >{about} Shendurney Wildlife Sanctuary  is a beautiful natural heaven located in town. It was established in 1984 and covers a total area of 171 sq. km. It is the only wildlife sanctuary in the district and is renowned for its biodiversity and beauty. The sanctuary is full of many picturesque vantage points. It has a host of trekking trails that takes one on a wonderful journey through these evergreen forests. Irrigation is taken care of by the Parappar Dam that was built across the Shendurney River. One comes across a rare tree species called Chenkurunji (Glutatravancorica) while travelling the forest. A safari here introduces one to hosts of wild herds including deer, monkey and bison. It is a gorgeous place to just relax and enjoy a nice picnic.</p>
    </Box>
  )
}

export default About