import React from 'react'
import { Button, Box, Heading, SimpleGrid} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Bottom = () => {
 

  return (
    <SimpleGrid columns={[2, null, 3]}style={{margin: "50px"}} spacing='40px'>
    <Box border="1px solid grey" height='80px'><PhoneIcon /></Box>
    <Box border="1px solid grey" height='80px'></Box>
    <Box border="1px solid grey" height='80px'></Box>
    
  </SimpleGrid>
  )
}

export default Bottom