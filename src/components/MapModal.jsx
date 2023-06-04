import { Text,useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,AspectRatio,Box } from "@chakra-ui/react"
import {FaMap} from 'react-icons/fa'

export function MapModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} display={"flex"} alignItems={'center'} gap={'20px'}><Text>Google Map</Text> <FaMap fontSize={'1.5rem'}/> </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Google Map</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <AspectRatio ratio={16 / 9} style={{ width: "100%", }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15764.547234524096!2d77.06454275!3d8.9595392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684994211770!5m2!1sen!2sin" ></iframe>
                </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }