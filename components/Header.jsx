import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import Link from "next/link";
import { React, useState } from "react";

import {
  BiHotel,
  BiMapAlt,
  BiRestaurant,
  BiSearch,
  BiStar,
} from "react-icons/bi";
import { TbMoodKid } from "react-icons/tb";
import { FaDrawPolygon, FaMapMarkerAlt } from "react-icons/fa";
import { GiWillowTree } from "react-icons/gi";
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
          {/* draw map */}
          <Link href="/drawmap">
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
            >
              <FaDrawPolygon fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Draw on map
              </Text>
            </Flex>
          </Link>
          {/* ecoregion */}
          <Link href="/coloredecoregion">
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
            >
              <GiWillowTree fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Ecoregion
              </Text>
            </Flex>
          </Link>
          {/* markeronmap */}
          <Link href="/markeronmap">
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
            >
              <FaMapMarkerAlt fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                MarkerOnMap
              </Text>
            </Flex>
          </Link>
          {/* playgrounds */}
          <Link href="/playgrounds">
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
            >
              <TbMoodKid fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Playgrounds
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
