import { Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Number6 = () => {
  const [post, setPost] = useState(null);
  const [loading,setLoading] = useState(true);
  console.log(post);
  useEffect(()=>{
      fetch("https://dummyjson.com/post/1")
      .then((res) => res.json())
      .then((res) => {
          setPost(res);
          setLoading(false)
        })
        .catch((err) => console.error(err));
    },[])
  return (
    <>
    {loading?"isLoading":<>
      <Heading>{post?.title}</Heading>
      <Text>{post?.body}</Text>
    </>}
    </>
  );
};

export default Number6;
