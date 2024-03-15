import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Number2 = () => {
    const [count,setCount]=useState(0);
  useEffect(()=>{
    const timer =  setInterval(()=>{
        // console.log("component rendering..")
      setCount((prev)=>prev+1)
     },1000)
     return ()=>{
        clearInterval(timer)
     }
  },[])
  return (
    <Heading>
        {count}
    </Heading>
  )
}

export default Number2