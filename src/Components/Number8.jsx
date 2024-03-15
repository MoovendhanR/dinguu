import { Box, Button, Text } from "@chakra-ui/react";
import React, {  useState } from "react";
const amt_per_item = 5;
const Number8 = () => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = amt_per_item * quantity;
  // const [totalPrice,setTotalprice]=useState(0);

  // useEffect(()=>{
  //     setTotalprice(amt_per_item*quantity)
  // },[quantity])

  const handleClick = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <Box align="center" mt="20%">
        <Button colorScheme="blue" onClick={handleClick}>
          Add Cart
        </Button>
        <Text size="xxl" color={"red"}>
          {totalPrice}
        </Text>
      </Box>
    </div>
  );
};

export default Number8;
