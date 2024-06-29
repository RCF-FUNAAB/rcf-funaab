import {
  Box,
  VStack,
  Heading,
  Text,
  PinInput,
  PinInputField,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const VerifyEmail = () => {
  return (
    <Box display={{ base: "block", sm: "none" }} w="100%" py="26px" px="24px">
      <VStack w="100%" spacing="54px">
        {" "}
        <VStack position="relative">
          <Box position="absolute" top="5px" left="0">
            <FaArrowLeftLong />
          </Box>
          <Heading color="black-base" fontSize="20px" fontWeight="700">
            Verify your Email
          </Heading>
          <Text align="center">
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.
          </Text>
        </VStack>
        <VStack w="100%" spacing="100px">
          <VStack w="100%" spacing="40px">
            <Text color="#565566">5 digits code</Text>
            <Flex w="100%" justify="space-between">
              <PinInput placeholder="0" otp>
                <PinInputField w="51px" h="52px" />
                <PinInputField w="51px" h="52px" />
                <PinInputField w="51px" h="52px" />
                <PinInputField w="51px" h="52px" />
                <PinInputField w="51px" h="52px" />
              </PinInput>
            </Flex>
            <Box borderRadius="4px" bg="#F6F6F6" py="4px" px="12px">
              <Text color="#2B2B40" fontSize="12px" fontWeight="300">
                Expires in{" "}
                <Text
                  as="span"
                  color="#01001A)"
                  fontSize="14px"
                  fontWeight="700"
                >
                  05:20
                </Text>
              </Text>
            </Box>
          </VStack>
          <VStack w="100%" spacing="32px">
            <Button
              w="100%"
              h="49px"
              colorScheme="primary-base"
              fontWeight="400"
              className="bg-primary-base"
            >
              Resend
            </Button>
            <Text
              fontSize="14px"
              color="primary-base"
              className=" text-primary-base"
            >
              Back
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default VerifyEmail;
