import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Number12 = () => {
   const [count,setCount]=useState(0)

// it will take all previous values
   const handleClick=()=>{
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1) 
}
// it will update only once
    // const handleClick=()=>{
    //        setCount(count+1)
    //        setCount(count+1)
    //        setCount(count+1)
    // }

  return (
    <Box >
        <Button colorScheme='blue' onClick={handleClick} >Button</Button>
          <Text size="xxl" color={"red"}>{count}</Text>
    </Box>
  )
}

export default Number12