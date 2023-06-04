import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Text,
    ModalOverlay,
    ModalContent,
    Flex,
    Image,
    Button,
    ModalFooter,
    VStack,
    Box,
    Accordion,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    AccordionItem,
    Input,
    FormControl,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react"
import { BiShieldAlt2 } from 'react-icons/bi'
import { useColorMode } from "@chakra-ui/system"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { cardNumber, expirationDate, cvv } from 'card-validator';
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import logo from "../../Images/logo.svg"

export default function PaymentModal({ onOpen, onClose, isOpen }) {
    var { colormode, toggleColorMode } = useColorMode();
    var { navigate } = useNavigate();

    const { booking_place } = useSelector(state => state);

    var data = {
        "payment_methods": [
            {
                "name": "Google Pay",
                "image_url": "https://cdn.razorpay.com/app/googlepay.svg"
            },
            {
                "name": "PhonePe",
                "image_url": "https://cdn.razorpay.com/app/phonepe.svg"
            },
            {
                "name": "Paytm",
                "image_url": "https://cdn.razorpay.com/app/paytm.svg"
            },
            {
                "name": "BHIM",
                "image_url": "https://cdn.razorpay.com/app/bhim.svg"
            }
        ]
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const [cardNumberValue, setCardNumberValue] = useState('');
    const [cardNumberValid, setCardNumberValid] = useState(false);
    const [expiryDateValue, setExpiryDateValue] = useState('');
    const [expiryDateValid, setExpiryDateValid] = useState(false);
    const [cvvValue, setCvvValue] = useState('');
    const [cvvValid, setCvvValid] = useState(false);

    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        setCardNumberValue(value);

        let sum = 0;
        let shouldDouble = false;
        for (let i = value.length - 1; i >= 0; i--) {
            let digit = parseInt(value.charAt(i));

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        const isValid = (sum % 10) === 0;
        setCardNumberValid(isValid);
    };


    const handleExpiryDateChange = (event) => {
        const value = event.target.value;
        setExpiryDateValue(value);
        const validation = expirationDate(value);
        setExpiryDateValid(validation.isValid);
    };

    const handleCvvChange = (event) => {
        const value = event.target.value;
        setCvvValue(value);
        const validation = cvv(value);
        setCvvValid(validation.isValid);
    };

    return (
        <>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <ModalContent borderRadius='10' width='350px'>
                        <ModalHeader bg="#0d1c1a" style={{ borderTopRightRadius: "10px", borderTopLeftRadius: '10px' }}>
                            <Flex alignItems='center' color='white' gap='2'>
                                <Box bg='white' borderRadius='3'>
                                    <Image src={logo} w="50px" />
                                </Box>
                                <VStack alignItems='flex-start'>
                                    <Text fontSize='.9rem'>ARNH184-BWQ9Q8V</Text>
                                    <Flex alignItems='center' gap='3px'>
                                        <BiShieldAlt2 fontSize='.8rem' />
                                        <Text fontSize='12px' mt='0 !important'>Razorpay Trusted Business</Text>
                                        <AiOutlineInfoCircle fontSize='.7rem' />
                                    </Flex>
                                </VStack>
                            </Flex>
                        </ModalHeader>
                        <ModalCloseButton color='white' />
                        <ModalBody>
                            <Text fontWeight='600'>
                                Pay With UPI QR
                            </Text>
                            <Flex border='1px solid gray' p='2' my='2' gap='10px'>
                                <Image w='110px' src='https://chart.googleapis.com/chart?chs=141x141&cht=qr&chl=upi%3A%2F%2Fpay%3Fpa%3Dzoworldlimited728.rzp%40icici%26pn%3DZoWorldLimited%26tr%3DEZV2023031911551182752996%26tn%3DZoWorldLimitedARNH184BWQ9Q8V%26am%3D739.23%26cu%3DINR%26mc%3D4722&choe=UTF-8&chld=L|0' />
                                <VStack alignItems='flex-start'>
                                    <Text fontSize='.8rem'>Scan the QR using any UPI app on your phone.</Text>
                                    <Flex justifyContent='space-between' w='70%'>
                                        {
                                            data.payment_methods.map((el) => {
                                                return <Image width='5' src={el.image_url} />
                                            })
                                        }
                                    </Flex>
                                </VStack>
                            </Flex>
                            <Text fontSize={"xl"} fontWeight={"700"} mb="3">Payable Amount: ₹{(booking_place.price*1.12).toFixed(0)}</Text>
                            <VStack alignItems={'flex-start'}>
                                <Text fontWeight='600'>
                                    Cards, UPI & More
                                </Text>
                                <VStack width={'100%'}>
                                    <Accordion allowToggle width={'100%'}>
                                        <AccordionItem width={'100%'}>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <Text>Card</Text>
                                                        <Text fontSize='.8rem'>Visa, Mastercard, RuPay & More</Text>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Flex gap='5px'>
                                                    <Input placeholder='Enter Your Card No' isRequired value={cardNumberValue} onChange={handleCardNumberChange} isInvalid={!cardNumberValid} />
                                                    <Input placeholder='CVV' isRequired width='30%' value={cvvValue} onChange={handleCvvChange} isInvalid={!cvvValid} />
                                                </Flex>
                                                <Input placeholder='Expiry Date' my='2' isRequired value={expiryDateValue} onChange={handleExpiryDateChange} isInvalid={!expiryDateValid} />
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem width={'100%'}>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <Text>UPI / QR</Text>
                                                        <Text fontSize='.8rem'>PhonePe, Google Pay, PayTM</Text>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <FormControl isRequired>
                                                <AccordionPanel pb={4}>
                                                    <Input placeholder='Enter UPI ID' />
                                                </AccordionPanel>
                                            </FormControl>
                                        </AccordionItem>

                                        <AccordionItem width={'100%'}>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <Text>Netbanking</Text>
                                                        <Text fontSize='.8rem'>All Indian banks</Text>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem width={'100%'}>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <Text>Wallet</Text>
                                                        <Text fontSize='.8rem'>
                                                            JioMoney & More
                                                        </Text>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet,
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </VStack>
                            </VStack>
                        </ModalBody>
                        <ModalFooter style={{
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            boxShadow: colormode === "light" ? "0px 0px 15px gray" : "none"
                        }}>
                            <Flex width='100%' justifyContent="space-between" alignItems="center">
                                <Text fontWeight='bold'>₹{(booking_place.price*1.12).toFixed(0)}</Text>
                                <NavLink to='/success'>
                                    <Button colorScheme='orange' type='submit'>Pay Now</Button>
                                </NavLink>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}