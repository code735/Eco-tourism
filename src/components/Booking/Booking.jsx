import {
    Box,
    Text,
    Heading,
    Center,
    RadioGroup,
    Input,
    Stack,
    Container,
    Radio,
    Textarea,
    Checkbox,
    Button,
    Select,
    Spacer
} from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router';


const Booking = ({ price, about }) => {

    const bookingCounter = ()=>{
        
    }



    return (
        <div style={{ display: "flex", margin: "20px" }}>
            <Box>
                <Heading s='h3' size='lg'  >Description</Heading>
                <Text>{about}</Text>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Heading s='h6' size='sm' >Chargable for kids above the age of 10.
                    Max 15 persons. Without food</Heading>
                <hr/>
            </Box>
            <Container maxW="400px" boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p="30px">

                <Heading>{price}₹</Heading>

                <Box my="20px">
                    <Input type="date" />
                </Box>
                <Box my="20px">
                    <Input type="text" placeholder="Name" />
                </Box>
                <Box my="20px">

                    <Select variant='outline' placeholder='Category' >
                        <option value='indianAdult'>Indian Adult</option>
                        <option value='indianChild'>Indian Child</option>
                        <option value='foreignAdult'>Foreign Adult</option>
                        <option value='foreignChild'>Foreign Child</option>
                    </Select>
                </Box>
                <Box my="20px">

                    <Select variant='outline' placeholder='Document Proof' >
                        <option value='aadhaarCard'>Aadhaar Card</option>
                        <option value='drivingLicense'>Driving License</option>
                        <option value='passport'>Passport</option>
                        <option value='panCard'>PAN Card</option>
                    </Select>
                </Box>
                <Box my="20px">
                    <Input type="text" placeholder="Govt. ID" />

                </Box>
                <Box my="20px">
                    <Textarea placeholder="Special activities you want" />
                </Box>
                <Box>
                    <Stack spacing={5} direction="row">
                        <Checkbox colorScheme="green" defaultChecked>
                            Indian
                        </Checkbox>
                        <Checkbox colorScheme="green" >
                            Foreigner
                        </Checkbox>
                    </Stack>
                </Box>
                <Box my="20px">
                    <Center>
                        <Button colorScheme="green" onClick={bookingCounter}>BOOK NOW</Button>
                    </Center>
                </Box>
            </Container>
        </div>
    )
}

export default Booking