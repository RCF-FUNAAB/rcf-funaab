import {
  Box,
  VStack,
  Heading,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import DesktopMessage from "../pages/DesktopMessage";

const Login = () => {
  return (
    <>
      <Box display={{ base: "block", sm: "none" }}>
        <VStack>
          <Heading color="black-base" fontSize="20px" fontWeight="700">
            Welcome Back👋
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.
          </Text>
        </VStack>
        <ButtonGroup>
          <Button></Button>
          <Button></Button>
        </ButtonGroup>
        <Text></Text>
      </Box>
      <DesktopMessage />
    </>
  );
};

export default Login;
