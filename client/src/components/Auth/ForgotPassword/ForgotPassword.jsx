import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const validate = (values) => {
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validate,
    onSubmit: (values) => {},
  });
  return (
    <Box display={{ base: "block", sm: "none" }} w="100%" py="26px" px="24px">
      <VStack as="form" spacing="32px" onSubmit={formik.handleSubmit}>
        <VStack position="relative">
          <Link to="/login">
            <Box position="absolute" top="5px" left="0">
              <FaArrowLeftLong />
            </Box>
          </Link>
          <Heading color="black-base" fontSize="20px" fontWeight="700">
            Forgot Password
          </Heading>
          <Text align="center">
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.
          </Text>
        </VStack>
        <VStack w="100%" spacing="100px">
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
          <Button
            type="submit"
            w="100%"
            h="49px"
            bg="#04A7EC"
            color="white"
            _hover={{ bg: "blue.500" }}
            fontWeight="400"
            isLoading={formik.isSubmitting}
            isDisabled={formik.isSubmitting}
          >
            Proceed
          </Button>
        </VStack>
        <Link to="/">
          <Text color="#04A7EC">Back</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;
