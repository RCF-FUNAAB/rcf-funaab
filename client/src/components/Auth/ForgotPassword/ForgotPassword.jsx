import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {
  return (
    <Box display={{ base: "block", sm: "none" }} w="100%" py="26px" px="24px">
      <VStack spacing="32px">
        <VStack position="relative">
          <Box position="absolute" top="5px" left="0">
            <FaArrowLeftLong />
          </Box>
          <Heading color="black-base" fontSize="20px" fontWeight="700">
            Forgot Password
          </Heading>
          <Text align="center">
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.
          </Text>
        </VStack>
        <VStack w="100%" spacing="100px">
          <FormControl>
            <FormLabel fontSize="14px" fontWeight="700">
              Email Address
            </FormLabel>
            <Input
              h="49px"
              fontSize="14px"
              borderColor="grey-60"
              type="email"
              placeholder="example@example.com"
            />
          </FormControl>
          <Button w="100%" h="49px" bg="#04A7EC" color="white" fontWeight="400">
            Proceed
          </Button>
        </VStack>
        <Text color="#04A7EC">Back</Text>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;
