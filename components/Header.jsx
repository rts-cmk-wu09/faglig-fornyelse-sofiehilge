import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import { React, useState } from "react";

import {
  BiHotel,
  BiMapAlt,
  BiRestaurant,
  BiSearch,
  BiStar,
} from "react-icons/bi";
const Header = ({ setType, setCoordinates }) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        <Flex>
          {/* <Autocomplete> */}
          <InputGroup width={"35vw"} shadow="lg">
            <InputRightElement
              pointerEvents={"none"}
              children={<BiSearch color="gray" fontSize={20} />}
            />
            <InputGroup
              type={"text"}
              placeholder="Search Google Map..."
              variant={"filled"}
              fontSize={18}
              bg={"white"}
              color={"gray.700"}
              _hover={{ bg: "whiteAplha.800" }}
              _focus={{ bg: "whiteAlpha.800" }}
              _placeholder={{ color: "gray:700" }}
            />
          </InputGroup>
          {/*  </Autocomplete> */}
          {/* Ratings - not working */}
          {/* Restaurants */}
          <Flex
            alignitems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("restaurants")}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex>
          {/* Hotels */}
          <Flex
            alignitems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("hotels")}
          >
            <BiHotel fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex>
          {/* Attractions */}
          <Flex
            alignitems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("attractions")}
          >
            <BiMapAlt fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
