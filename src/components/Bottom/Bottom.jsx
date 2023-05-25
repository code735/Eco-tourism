import React from 'react'
import { Button, Box, Heading, SimpleGrid, Center} from '@chakra-ui/react'
import "./Bottom.css"



const Bottom = () => {
 

  return (
    <Center>
    <SimpleGrid columns={[2, null, 5]}style={{margin: "50px", width:"50%",}} spacing='40px' >
    <Box border="1px solid grey" className='icons'>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn1.png" alt="" />
      SAFARIS
      </button>
    </Box>
    <Box border="1px solid grey" className='icons'>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn2.png" alt="" />
      TREKKING
      </button>
    </Box>
    <Box border="1px solid grey" className='icons'>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn3.png" alt="" />
      CAMPING
      </button>
    </Box>
    <Box border="1px solid grey" className='icons'>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/image-icon.png" alt="" />
      PHOTOS
      </button>
    </Box>
    <Box border="1px solid grey" className='icons'>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/video%20icone.png" alt="" />
      VIDEOS
      </button>
    </Box>
    
  </SimpleGrid>
  </Center>
  )
}

export default Bottom