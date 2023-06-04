import React from 'react'
import { AspectRatio, Box,Button,Text } from '@chakra-ui/react'
import { MapModal } from '../MapModal'
import { Ytmodal } from '../Ytmodal'

const Map = () => {

    return (

        <Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'3%'} py={'3%'}>
                <Ytmodal/>
                <MapModal/>
            </Box>
        </Box>
    )
}

export default Map