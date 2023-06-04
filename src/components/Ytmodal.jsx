import { Text,useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,AspectRatio,Box } from "@chakra-ui/react"
import {BsYoutube} from 'react-icons/bs'

export function Ytmodal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} display={'flex'} alignItems={'center'} gap={'20px'}> <Text>Youtube</Text> <BsYoutube fontSize={'1.5rem'}/> </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Youtube</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <AspectRatio ratio={16 / 9} style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A4DOeq0A0bE?start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }