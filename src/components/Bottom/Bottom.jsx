import React from 'react'
import { Button, Box, Heading, SimpleGrid, Center} from '@chakra-ui/react'
import "./Bottom.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'

import { TimeIcon } from '@chakra-ui/icons'



const Bottom = () => {

  
  const { isOpen, onOpen, onClose } = useDisclosure()
 

  return (
    <Center>
    <SimpleGrid columns={[2, null, 5]}style={{margin: "50px", width:"50%",}} spacing='40px' >
    <Box border="1px solid grey" className='icons'>
     <Center>
     <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn1.png" alt="" />
      SAFARIS
      </button>
     </Center>
    </Box>
    <Box border="1px solid grey" className='icons'>
     <Center>
     <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn2.png" alt="" />
      TREKKING
      </button>
     </Center>
    </Box>
    <Box border="1px solid grey" className='icons'>
     <Center>
     <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/inn3.png" alt="" />
      CAMPING
      </button>
     </Center>
    </Box>
    <Box border="1px solid grey" className='icons'>
     <Center>
     <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/image-icon.png" alt="" />
      PHOTOS
      </button>
     </Center>
    </Box>
    <Box border="1px solid grey" className='icons'>
      <Center>
      <button>
        <img src="https://www.keralatourism.org/images/eco-tourism/video%20icone.png" alt="" />
      VIDEOS
      </button>
      </Center>
    </Box>
    
  </SimpleGrid>
  <Button colorScheme='pink' onClick={onOpen}> <TimeIcon/>  Activity Timing</Button>

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Activities Timing</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
                You can choose your activity.
            </Text>
            Trekking: 2:00 AM  - 12:00 PM
            Swimming: 8:00 AM  - 2:00 PM
            Horse Riding: 4:00 PM  - 7:00 PM
            Sky Diving: 8:00 AM  - 12:00 PM
            Ropeway ride: 6:00 AM  - 12:00 PM
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>
  </Center>
  )
}

export default Bottom