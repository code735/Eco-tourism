import React from 'react'
import { AspectRatio, Box,Button,Text } from '@chakra-ui/react'


const Map = () => {

    return (

        <Box>
           

            <Box style={{ backgroundColor: "f8f8f8", padding: "30px", display: "flex", flexDirection: "row-reverse" }}>
                <AspectRatio ratio={16 / 9} style={{ width: "40%", }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15764.547234524096!2d77.06454275!3d8.9595392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684994211770!5m2!1sen!2sin" ></iframe>
                </AspectRatio>
                <AspectRatio ratio={16 / 9} style={{ width: "60%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A4DOeq0A0bE?start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </AspectRatio>
            </Box>
        </Box>
    )
}

export default Map