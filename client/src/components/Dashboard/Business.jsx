import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Checkbox,
  Spacer,
} from "@chakra-ui/react";
import { React, useState, useContext } from "react";
import DesktopMessage from "../pages/DesktopMessage";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Hero from "../../assets/programming.svg";

const Business = () => {
  return (
    <>
      <Box
        display={{ base: "block", sm: "none" }}
        w="100%"
        h="100%"
        py="26px"
        px="24px"
      >
        <VStack position="relative" w="100%" h="85vh" justify="space-between">
          <Box position="absolute" top="5px" left="0">
            <Link to="/">
              <FaArrowLeftLong />
            </Link>
          </Box>

          <Heading color="#01001A" fontSize="14px" fontWeight="700">
            Business Profile
          </Heading>
          <VStack>
            <Image src={Hero} />
            <VStack w="100%" align="center" spacing="16px">
              <Heading color="#01001A" fontSize="16px" fontWeight="500">
                Coming Soon...
              </Heading>
              <Text
                w="345px"
                textAlign="center"
                color="#2B2B40"
                fontSize="14px"
                className=" leading-[21px]"
              >
                Get ready for something big. Click the button below to join the
                waiting list for free.
              </Text>
            </VStack>
          </VStack>
          <Button
            w="100%"
            h="50px"
            rounded="4px"
            bg="#04A7EC"
            color="white"
            fontSize="14px"
            fontWeight="400"
          >
            Join
          </Button>
        </VStack>
      </Box>
      <DesktopMessage />
    </>
  );
};

export default Business;
