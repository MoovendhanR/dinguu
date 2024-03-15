import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Number7 = () => {
   console.log("component rendering ...")
    const [price,setPrice]=useState({
        price:100,
        total:true
    })

    const handleClick=()=>{
         setPrice({
        price:100,
        total:true
         })
    }
//unessary render 
    useEffect(()=>{

    },[price.price])

    // numer or string will be === true but object will be false thats the reason rerendering reason the address RE Diffrent
    // const [price,setPrice]=useState(0)

    // const handleClick=()=>{
    //      setPrice(price)
    // }

  return (
    <>
     <Box align='center' mt="20%">
        <Button colorScheme='blue' onClick={handleClick} >Button</Button>
          <Text size="xxl" color={"red"}>{price.total}</Text>
    </Box>
    </>
  )
}

export default Number7