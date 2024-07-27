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
import { multiStepContext } from "./SignupContext";
import DesktopMessage from "../../pages/DesktopMessage";
// import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { useFormik } from "formik";
import { FaArrowLeftLong } from "react-icons/fa6";
import Google from "../../../assets/icons/google.svg";
import Apple from "../../../assets/icons/apple.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "First name must be 3 characters and above";
  } else if (values.firstName.length > 20) {
    errors.firstName = "First name must be less than 20 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Last name must be 2 characters and above";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Last name must be less than 20 characters";
  }

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

const Signup = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const { currentStep } = useContext(multiStepContext);
  {
    multiStepContext;
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      termsAccepted: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        navigate("/", {
          state: {
            toast: {
              title: "Account Created Successfuly!",
              description:
                "Yoo! Your account has been successfully set up. Your journey starts now.",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            },
          },
        });
      }, 1000);
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
              Create your Account
            </Heading>
            <Text align="center">
              Kindly fill in your details to create an account
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
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel color="#01001A" fontSize="14px" fontWeight="700">
                  First Name
                </FormLabel>
                <Input
                  h="49px"
                  fontSize="14px"
                  borderColor="grey-60"
                  type="text"
                  placeholder="Other Names"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.errors.lastName && formik.touched.lastName}
              >
                <FormLabel color="#01001A" fontSize="14px" fontWeight="700">
                  Last Name
                </FormLabel>
                <Input
                  h="49px"
                  fontSize="14px"
                  borderColor="grey-60"
                  type="text"
                  placeholder="Surname"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel color="#01001A" fontSize="14px" fontWeight="700">
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
                <FormLabel color="#01001A" fontSize="14px" fontWeight="700">
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
                  w="100%"
                  isRequired
                  isInvalid={
                    formik.errors.termsAccepted && formik.touched.termsAccepted
                  }
                >
                  <Checkbox
                    name="termsAccepted"
                    isChecked={formik.values.termsAccepted}
                    onChange={handleCheckboxChange}
                    onBlur={formik.handleBlur}
                  >
                    <Text color="#2B2B40" fontSize="14px">
                      I agree to the{" "}
                      <Link>
                        <Text as="span" color="#04A7EC">
                          Terms and Conditions
                        </Text>
                      </Link>
                    </Text>
                  </Checkbox>
                  <FormErrorMessage>
                    {formik.errors.termsAccepted}
                  </FormErrorMessage>
                </FormControl>

                <Spacer />
                {/* <Link to="/forgot-password">
                  <Text
                    as="button"
                    type="button"
                    color="#04A7EC"
                    fontSize="14px"
                    onClick={() => setStep(1)}
                  >
                    Forgot Password?
                  </Text>
                </Link> */}
              </Flex>
            </VStack>
            <Button
              type="submit"
              w="100%"
              h="49px"
              colorScheme="primary-base"
              isLoading={formik.isSubmitting}
              isDisabled={formik.isSubmitting}
              className=" bg-primary-base"
            >
              Create Account
            </Button>
          </VStack>
          <Text fontSize="14px">
            Already have an account?{" "}
            <Link to="/login">
              <Text as="span" fontSize="14px" color="#04A7EC">
                Login
              </Text>
            </Link>
          </Text>
        </VStack>
      </Box>
      <DesktopMessage />
    </>
  );
};

export default Signup;
