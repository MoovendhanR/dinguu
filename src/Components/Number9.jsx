import { Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function Number9() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
  });
  console.log(user);
  const handleChange = (e) => {
    const key = e.target.name
    // setUser({
    //     ...user,
    //     name:e.target.value
    // })
    // setUser((prev) => ({
    //   ...prev,
    //   firstname: e.target.value,
    // }));

    // setUser((prev) => ({
    //     ...prev,
    //     [value]: e.target.value,
    //   }));
    setUser({
        ...user,
        [key]:e.target.value
    })
  };

  return (
    <Stack spacing={3}>
      <Input
        placeholder="firstname.."
        name="firstname"
        size="lg"
        onChange={handleChange}
      />
      <Input
        placeholder="lastname"
        name="lastname"
        size="lg"
        onChange={handleChange}
      />
      <Input
        placeholder="email"
        size="lg"
        onChange={handleChange}
        name="email"
      />
      <Input
        placeholder="password"
        size="lg"
        onChange={handleChange}
        name="password"
      />
      <Input placeholder="age" size="lg" onChange={handleChange} name="age" />

      {/* <Box>{user.firstname}</Box> */}
    </Stack>
  );
}
