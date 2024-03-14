import { Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const Number10 = () => {

     const [user,setUser] = useState({name:"",age:50,city:""});

     
     const handleChange=(e)=>{
        // setUser({
        //     ...user,
        //     name:e.target.value
        // })
        setUser(
          (prev)=>{
            return{
            ...prev,
            name:e.target.value
            }
          }
        )
     }


    //  const handleChange=(e)=>{
    //     setUser({
    //         name:e.target.value
    //     })
    //  }

  return (
    <>
       <form>
          <Input onChange={handleChange} placeholder='Basic usage' />
       </form>
       <Text size="lg">{user.name}</Text>
    </>
  )
}

export default Number10