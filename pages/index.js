import Header from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import PlaceDetail from "@/components/PlaceDetail";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
 const [type, setType] = useState('restaurants')
 const [ratings, setRatings] = useState('')
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"realtive"}
    >
      <Header 
      setType = {setType}
      setRatings = {setRatings}
      setCoordinates = {setCoordinates}
      />
      {/*   <List /> */}
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>
  );
};

export default Home;
