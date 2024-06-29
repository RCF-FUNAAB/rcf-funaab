import { Box, VStack, Image, Heading, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/full-logo.svg";
import QRCode from "../../assets/qrcode.png";

const DesktopMessage = () => {
  return (
    <VStack
      display={{ base: "none", sm: "flex" }}
      w="100%"
      h="100vh"
      py="20px"
      justify="center"
      align="center"
    >
      <VStack
        w="573px"
        h="100%"
        bg="white"
        justify="center"
        align="center"
        border="1px"
        borderColor="grey-60"
      >
        <Image src={Logo} />
        <VStack spacing="16px" align="center">
          <Heading w="419px" fontSize="25px" align="center">
            Leave the Desktop. Only Mobile Responsive Rocks!
          </Heading>
          <Text align="center">Scan this QR Code to proceed</Text>
        </VStack>
        <Box h="60px"></Box>
        <Image src={QRCode} />
      </VStack>
    </VStack>
  );
};

export default DesktopMessage;
