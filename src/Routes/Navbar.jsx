import React from "react";
import {
  Box,
  Flex,
  Text,

  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link,
  // Button
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {

  return (
    <Box>
      {/* as="header" position="fixed" w="100%" */}
      <Flex
       
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        width={"100%"}
      >
       
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link as={RouterLink} to="/number1">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake12
            </Text>
          </Link>
        </Flex>
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number2">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake11
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number3">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake10
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number4">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake9
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number5">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake8
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number6">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              mistake7
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number7">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake6
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number8">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake5
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number9">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake4
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          {" "}
        </Flex>{" "}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link as={RouterLink} to="/number10">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake3
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          {" "}
        </Flex>{" "}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link as={RouterLink} to="/number11">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake2
            </Text>
          </Link>
        </Flex>{" "}
        <Flex
          flex={{ base: 1 }}
          ml={"20px"}
          justify={{ base: "center", md: "start" }}
        >
          <Link as={RouterLink} to="/number12">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Mistake1
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
