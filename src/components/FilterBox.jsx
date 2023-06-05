import { Box, Button, Flex, Heading, Input, Select } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SEND_DATA_FUNCTION } from '../Redux/action'

export default function FilterBox() {
  const [selectOpt, setselectOpt] = useState()
  const [terrain, setterrain] = useState()
  const [searchterm, setsearchterm] = useState("")

  const dispatch = useDispatch();

  const handleoptchange=(order)=>{
    if(order==="default"){
      axios.get(`https://eco-tourism-backend.onrender.com/city`)
      .then((Response)=>{
          dispatch(SEND_DATA_FUNCTION(Response.data));
      })
    }
    else{
      axios.get(`https://eco-tourism-backend.onrender.com/city?_sort=price&_order=${order}`)
      .then((Response)=>{
        dispatch(SEND_DATA_FUNCTION(Response.data));
      })
    }
  }

  const handleTerrain=(location)=>{
    if(location==="default"){
      axios.get(`https://eco-tourism-backend.onrender.com/city`)
      .then((Response)=>{
          dispatch(SEND_DATA_FUNCTION(Response.data));
      })
    }
    else{
      axios.get(`https://eco-tourism-backend.onrender.com/city?q=${location}`)
      .then((Response)=>{
        dispatch(SEND_DATA_FUNCTION(Response.data));
      })
    }
  }

  useEffect(()=>{
      axios.get(`https://eco-tourism-backend.onrender.com/city?q=${searchterm}`)
        .then((Response)=>{
          dispatch(SEND_DATA_FUNCTION(Response.data));
        })
  },[searchterm])
  
  return (
    <Box width={'40%'} margin={'0 auto'} marginTop={'5%'} paddingTop={'5%'}>
        <Flex gap={'20px'} padding={'4% 0'}>
          <Input color={'white'} background={'#00000063'} outline={'none'} border={'none'} name='search' placeholder='Search by place' _placeholder={{
            color:"white",
            fontFamily:'Italiana, serif',
          }} onChange={(e)=>{
            setsearchterm(e.currentTarget.value)}}/>
          {/* <Button background={'transparent'} border={'1px solid white'} color={'white'}
          onClick={handleSearchClick}
          _hover={{
            color:"black",
            background:"white"
          }
          }>Search</Button> */}
        </Flex>
        <Flex py={'4%'} alignItems={'center'} justifyContent={'space-between'} gap={'20px'}>
          <Heading color={'white'} fontSize={'1.3rem'} fontFamily={'Italiana, serif'}>Sort By Price : </Heading>
          <Select value={selectOpt} fontFamily={'Italiana, serif'} onChange={(e)=>{
            handleoptchange(e.currentTarget.value)
          }} color={'white'} width={'50%'} background={'#00000063'} outline={'none'} border={'none'} >
            <option value="default"  style={{
              color:"black"
            }}
            onClick={(e)=>{
              selectOpt(e.currentTarget.value)
            }}
            >Select an option</option>
            <option value="asc" style={{
              color:"black"
            }}
            onClick={(e)=>{
              selectOpt(e.currentTarget.value)
            }}>Ascending</option>
            <option value="desc" style={{
              color:"black"
            }}
            onClick={(e)=>{
              selectOpt(e.currentTarget.value)
            }}>Descending</option>
          </Select>
        </Flex>
        <Flex py={'4%'} alignItems={'center'} justifyContent={'space-between'} gap={'20px'}>
          <Heading color={'white'} fontSize={'1.3rem'} fontFamily={'Italiana, serif'}>Filter Places By Terrain : </Heading>
          <Select fontFamily={'Italiana, serif'} value={selectOpt} onChange={(e)=>{
            handleTerrain(e.currentTarget.value)
          }} color={'white'} width={'50%'} background={'#00000063'} outline={'none'} border={'none'} >
            <option value="default"  style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}
            >Select an option</option>
            <option value="hills" style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}>Hills</option>
            <option value="wildlife" style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}>Wildlife</option>

            <option value="mountains" style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}>Mountains</option>

            <option value="grasslands" style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}>Grasslands</option>
            
            <option value="beaches" style={{
              color:"black"
            }}
            onClick={(e)=>{
              setterrain(e.currentTarget.value)
            }}>Beaches</option>
          </Select>
        </Flex>
    </Box>
  )
}
