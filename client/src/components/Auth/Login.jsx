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
import { multiStepContext } from "./LoginContext";
import DesktopMessage from "../pages/DesktopMessage";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { useFormik } from "formik";
import { FaArrowLeftLong } from "react-icons/fa6";
import Google from "../../assets/icons/google.svg";
import Apple from "../../assets/icons/apple.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = "Terms must be accepted";
  }

  return errors;
};

const Login = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const { currentStep } = useContext(multiStepContext);
  {
    multiStepContext;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      termsAccepted: "",
    },
    validate,
    onSubmit: () => {
      console.log("Submitted");
    },
  });

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData({
      ...userData,
      [name]: checked,
    });
    formik.setFieldValue(name, checked);
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <ForgotPassword />;
      case 2:
        return <AccountDetails />;
      case 3:
        return <VerifyEmail />;
    }
  };
  return (
    <>
      <Box display={{ base: "block", sm: "none" }} w="100%" py="26px" px="24px">
        <VStack as="form" spacing="32px" onSubmit={formik.handleSubmit}>
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
              <FormControl
                isRequired
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel fontSize="14px" fontWeight="700">
                  Email Address
                </FormLabel>
                <Input
                  h="49px"
                  fontSize="14px"
                  borderColor="grey-60"
                  type="email"
                  placeholder="example@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.errors.password && formik.touched.password}
              >
                <FormLabel fontSize="14px" fontWeight="700">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    h="49px"
                    fontSize="14px"
                    borderColor="grey-60"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Flex w="100%">
                <FormControl
                  w="40%"
                  isRequired
                  isInvalid={
                    formik.errors.termsAccepted && formik.touched.termsAccepted
                  }
                >
                  <Checkbox
                    color="#2B2B40"
                    fontSize="14px"
                    name="termsAccepted"
                    isChecked={formik.values.termsAccepted}
                    onChange={handleCheckboxChange}
                    onBlur={formik.handleBlur}
                  >
                    Remember me
                  </Checkbox>
                  <FormErrorMessage>
                    {formik.errors.termsAccepted}
                  </FormErrorMessage>
                </FormControl>

                <Spacer />
                <Link to="/forgot-password">
                  <Text
                    as="button"
                    type="button"
                    color="#04A7EC"
                    fontSize="14px"
                    onClick={() => setStep(1)}
                  >
                    Forgot Password?
                  </Text>
                </Link>
              </Flex>
            </VStack>
            <Button
              type="submit"
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
