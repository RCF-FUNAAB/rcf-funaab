import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Checkbox,
  Spacer,
} from "@chakra-ui/react";
import { React, useState } from "react";
import DesktopMessage from "../pages/DesktopMessage";
import { FaArrowLeftLong } from "react-icons/fa6";
import Google from "../../assets/icons/google.svg";
import Apple from "../../assets/icons/apple.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);
  return (
    <>
      <Box display={{ base: "block", sm: "none" }} w="100%" py="26px" px="24px">
        <VStack spacing="32px">
          <VStack position="relative">
            <Box position="absolute" top="5px" left="0">
              <FaArrowLeftLong />
            </Box>
            <Heading color="black-base" fontSize="20px" fontWeight="700">
              Welcome Back👋
            </Heading>
            <Text align="center">
              Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.
            </Text>
          </VStack>
          <VStack w="100%" spacing="12px">
            <Button w="100%" h="49px" leftIcon={<Image src={Google} />}>
              Continue with Google
            </Button>
            <Button
              w="100%"
              h="49px"
              colorScheme="black-base"
              className=" bg-black-base"
              leftIcon={<Image src={Apple} />}
            >
              Continue with Apple
            </Button>
          </VStack>

          <Text color="#656565" fontSize="14px">
            OR
          </Text>
          <VStack w="100%" spacing="52px">
            <VStack w="100%" align="flex-start" spacing="16px">
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
              <FormControl>
                <FormLabel fontSize="14px" fontWeight="700">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    h="49px"
                    fontSize="14px"
                    borderColor="grey-60"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement top="5px" width="4.5rem">
                    <IconButton
                      h="30px"
                      w="30px"
                      bg="none"
                      _hover={{ bg: "secondary-color100" }}
                      icon={
                        showPassword ? (
                          <FaEyeSlash className=" text-[#656565]" />
                        ) : (
                          <FaEye className=" text-[#656565]" />
                        )
                      }
                      onClick={handlePasswordClick}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Flex w="100%">
                <Checkbox color="#2B2B40" fontSize="14px">
                  Remember me
                </Checkbox>
                <Spacer />
                <Text color="#04A7EC" fontSize="14px">
                  Forgot Password?
                </Text>
              </Flex>
            </VStack>
            <Button
              w="100%"
              h="49px"
              colorScheme="primary-base"
              className=" bg-primary-base"
            >
              Login
            </Button>
          </VStack>
          <Text>
            Don’t have an account?{" "}
            <a href="" className=" text-primary-base">
              Create Account
            </a>
          </Text>
        </VStack>
      </Box>
      <DesktopMessage />
    </>
  );
};

export default Login;
