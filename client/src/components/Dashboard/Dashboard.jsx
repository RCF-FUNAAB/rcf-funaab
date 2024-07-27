import React, { useEffect, useState, useContext } from "react";
import {
  VStack,
  Flex,
  Box,
  Avatar,
  AvatarBadge,
  Heading,
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  useToast,
} from "@chakra-ui/react";
import { multiStepContext } from "./DashboardContext";
import User from "../../assets/user.jpg";
import Briefcase from "../../assets/icons/briefcase.svg";
import NotificationStatus from "../../assets/icons/notification-status.svg";
import Search from "../../assets/icons/search.svg";
import { GoArrowRight } from "react-icons/go";
import Hero from "../../assets/ads-hero.png";
import NoData from "../../assets/icons/no-data.svg";
import Home from "../../assets/icons/home.svg";
import Shop from "../../assets/icons/shop.svg";
import Community from "../../assets/icons/community.svg";
import Profile from "../../assets/icons/profile.svg";
import Add from "../../assets/icons/add.svg";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Dashboard = ({ name, onChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (location.state && location.state.toast) {
      toast(location.state.toast);
      // Clear state after showing the toast
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, toast, navigate]);

  const { optionType, setOptionType } = useContext(multiStepContext);

  const profile = [
    { image: "/profile/ope.jpg", name: "Ope" },
    { image: "/profile/john.jpg", name: "John" },
    { image: "/profile/damola.jpg", name: "Damola" },
    { image: "/profile/elizabeth.jpg", name: "Elizabeth" },
    { image: "/profile/precious.jpg", name: "Precious" },
    { image: "/profile/toyosi.jpg", name: "Toyosi" },
    { image: "/profile/damola.jpg", name: "Toyosi" },
  ];

  const options = [
    {
      value: "business",
      label: "Business",
    },
    {
      value: "church",
      label: "Church",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(optionType || null);

  const handleClick = (value) => {
    setSelectedValue(value);
    setOptionType(value);
    if (onChange) onChange(value); // Optional callback for custom logic
  };
  return (
    <VStack
      display={{ base: "flex", sm: "none" }}
      w="100%"
      spacing="16px"
      py="26px"
      px="20px"
    >
      <Flex w="100%" justify="space-between" align="center">
        <Flex align="center" gap="8px">
          <Box border="1px" borderColor="#CE4F35" rounded="full" p="2px">
            <Avatar w="28px" h="28px" src={User} />
          </Box>
          <Heading color="#01001A" fontSize="14px" fontWeight="700">
            Hello, Promise 👋
          </Heading>
        </Flex>
        <Flex gap="24px">
          <Link to="/business">
            <Image src={Briefcase} />
          </Link>
          <Image src={NotificationStatus} />
        </Flex>
      </Flex>
      <VStack w="100%" spacing="20px">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Image src={Search} />
          </InputLeftElement>
          <Input
            w="100%"
            bg="#F6F6F6"
            px="20px"
            type="search"
            placeholder="Search"
            _placeholder={{ color: "#CCCCD1", fontSize: "14px" }}
          />
        </InputGroup>
        <Flex
          w="100%"
          justify="start"
          gap="12px"
          overflowX="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          }}
        >
          {profile.map((user, i) => (
            <VStack key={i}>
              <Box border="1px" borderColor="#CE4F35" rounded="full" p="2px">
                <Avatar w="46px" h="46px" src={user.image}>
                  <AvatarBadge boxSize="0.7em" bg="green.500" />
                </Avatar>
              </Box>
              <Text color="#2B2B40" fontSize="12px">
                {user.name}
              </Text>
            </VStack>
          ))}
        </Flex>
        <VStack w="100%" spacing="16px">
          <Box
            w="100%"
            h="83px"
            bgImage="url('../../src/assets/ads-bg.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            py="13px"
            px="16px"
            rounded="8px"
            overflow="hidden"
          >
            <Flex w="100%" overflow="hidden">
              <VStack w="244px" align="start" spacing="2px">
                <Heading
                  w="100%"
                  color="#FFF"
                  fontSize="12px"
                  fontWeight="500"
                  className=" leading-5"
                >
                  Create an advert to promote your business within the channel
                </Heading>
                <Flex gap="4px" align="center">
                  <Text color="#3A94FE" fontSize="10px" fontWeight="300">
                    Get Started
                  </Text>
                  <GoArrowRight width="20px" color="#3A94FE" />
                </Flex>
              </VStack>
              <Image h="68px" src={Hero} />
            </Flex>
          </Box>
          <Flex w="100%" justify="center" gap="8px">
            <Box w="28px" h="2px" bg="#04A7EC"></Box>
            <Box w="6px" h="2px" bg="#F1F1F1"></Box>
            <Box w="6px" h="2px" bg="#F1F1F1"></Box>
          </Flex>
        </VStack>
        <Box
          w="100%"
          h="48px"
          p="6px"
          border="1px"
          borderColor="#01AEF3"
          rounded="100px"
        >
          <Flex w="100%" h="100%" justify="center" align="center">
            {options.map((option) => (
              <Box
                key={option.value}
                w="100%"
                h="100%"
                bg={selectedValue === option.value ? "#04A7EC" : "#FFF"}
                rounded="100px"
                className="cursor-pointer"
                onClick={() => handleClick(option.value)}
              >
                <VStack h="100%" justify="center" align="center">
                  <Text
                    color={selectedValue === option.value ? "#FFF" : "#80808C"}
                    fontSize="12px"
                  >
                    {option.label}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Flex>
        </Box>
        <VStack h="30vh" justify="center" align="center">
          <Image src={NoData} />
        </VStack>
      </VStack>
      <Box
        position="fixed"
        w="60px"
        h="60px"
        right="25px"
        bottom="100px"
        bgGradient="linear-gradient(99deg, #01AEF3 0%, #353374 100%)"
        rounded="full"
        p="18px"
      >
        <Image src={Add} />
      </Box>
      <Box
        as="footer"
        position="fixed"
        w="100%"
        h="90px"
        bg="#FFF"
        left="0"
        bottom="0"
        borderTop="1px"
        borderTopColor="#EAEDF4"
        className=" shadow-footer"
      >
        <VStack w-="100%" h="100%" justify="center" align="center">
          <Flex w="100%" justify="center" align="center" gap="19px">
            <VStack w="100%" align="center" gap="2px">
              <Image src={Home} />
              <Text color="#04A7EC" fontSize="12px">
                Home
              </Text>
            </VStack>
            <VStack w="100%" align="center" gap="2px">
              <Image src={Shop} />
              <Text color="#AAAAB3" fontSize="12px">
                Market
              </Text>
            </VStack>
            <VStack w="100%" align="center" gap="2px">
              <Image src={Community} />
              <Text color="#AAAAB3" fontSize="12px">
                Community
              </Text>
            </VStack>
            <VStack w="100%" align="center" gap="2px">
              <Image src={Profile} />
              <Text color="#AAAAB3" fontSize="12px">
                Profile
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Dashboard;
