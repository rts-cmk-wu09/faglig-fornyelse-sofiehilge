import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import PlaceDetail from "@/components/PlaceDetail";
import { getPlacesData } from "./api";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  /*  const [ratings, setRatings] = useState(""); */
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get the users current location on initial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  /*   useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData)
  }, [ratings])
 */
  useEffect(() => {
    setIsLoading(true);
    if (bounds) {
      getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
        console.log(data);
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

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
        setType={setType}
        /*     setRatings={setRatings} */
        setCoordinates={setCoordinates}
      />
      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
};

export default Home;
