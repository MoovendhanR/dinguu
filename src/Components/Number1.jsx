import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Number1 = () => {
  const [id, setId] = useState(1);
  const handleClick = () => {
    // setId((prev) => prev + 1);
    setId(Math.floor(Math.random()*100))
  };
  return (
    <>
      <Box align="center" mt="20%">
        <Button colorScheme="blue" onClick={handleClick}>
          Button
        </Button>
        <PostBody id={id} />
      </Box>
    </>
  );
};

export default Number1;

function PostBody({ id }) {
    // console.log(id)
  const [text, setText] = useState("");
  const [isLoading,setIsloading]=useState(true)

//   useEffect(() => {
//     fetch(`https://dummyjson.com/post/${id}`)
//       .then((res) => res.json())
//       .then((res) =>{
//         setText(res.title)
//         setIsloading(false)
//     })
//       .catch((err) => console.log(err));
//   }, [id]);
useEffect(()=>{
const controller = new AbortController;
fetch(`https://dummyjson.com/post/${id}`,{signal:controller.signal})
  .then((res) => res.json())
  .then((res) =>{
    setText(res.title)
    setIsloading(false)
})
  .catch((err) => console.log(err));
  return()=>controller.abort();
}, [id]);
  return (
    <>
    {isLoading ? "Loading ...":<Heading>{text}</Heading>}
      
    </>
  );
}
