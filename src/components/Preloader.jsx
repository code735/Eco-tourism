import { motion } from "framer-motion";
import React, { useEffect ,useState} from "react";
import preloader from '../Images/preloader1.svg'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Image,
  useDisclosure,
} from '@chakra-ui/react'

export const Preloader = () => {
  const { isOpen, onClose } = useDisclosure();
  const [opentoggle, setopentoggle] = useState(true)



  useEffect(() => {
    const timer = setTimeout(() => {
      setopentoggle(false)
    }, 2000);

    return () => {
        setopentoggle(true)
        clearTimeout(timer)
    };
  }, []);

  return (
    <Drawer placement='top' isOpen={opentoggle} p={0} overflow='hidden'>
      <DrawerOverlay />
      <DrawerContent p={0} overflow='hidden'>
        <DrawerBody p={0} overflow='hidden'>
          <div
            style={{
              background: "#FFB865",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "10",
              position: "relative",
              top: "0",
              left: "0"
            }}
          >
            <div
              style={{
                width: "60%",
                position: "absolute",
              }}
            >
              <Image src={preloader} />
            </div>
            <motion.div
              style={{
                width: 200,
                height: 200,
              }}
              animate={{
                rotate: [0, 360] // Rotate from 0 degrees to 360 degrees
              }}
              transition={{
                duration: 2, // Animation duration in seconds
                repeat: Infinity, // Repeat the animation infinitely
                ease: "linear" // Animation easing function
              }}
            >
              <img src="https://eco-tourism-opal.vercel.app/static/media/logo.0a7e60938b0ca9861d97f9f0b8100e9b.svg" width={'100%'} height={'100%'} />
            </motion.div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};