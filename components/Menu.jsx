import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";
import { GiWillowTree } from "react-icons/gi";
import { FaDrawPolygon, FaMapMarkerAlt } from "react-icons/fa";
import { Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
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
            {/* Menu items */}
            {/* Googlemaps */}
            <Link href="/">
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
              >
                <GrMapLocation fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500}>
                  GoogleMaps
                </Text>
              </Flex>
            </Link>
            {/* Draw on map */}
            <Link href="/Drawmap">
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
              >
                <FaDrawPolygon fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500}>
                  Draw on Maps
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
                transition={"ease-in-out"}
                transitionDuration={"0.3s"}
              >
                <GiWillowTree fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500}>
                  Ecoregion
                </Text>
              </Flex>
            </Link>
            {/* Marker on map */}
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
                transition={"ease-in-out"}
                transitionDuration={"0.3s"}
              >
                <FaMapMarkerAlt fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500}>
                  MarkeronMap
                </Text>
              </Flex>
            </Link>
             {/* Playgrounds on map*/}
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
                transition={"ease-in-out"}
                transitionDuration={"0.3s"}
              >
                <FaMapMarkerAlt fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500}>
                  Playgrounds
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Menu;
