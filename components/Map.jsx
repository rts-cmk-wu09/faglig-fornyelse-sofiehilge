import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ coordinates, setCoordinates }) => {
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB9J4u5-MnfqKarI5OMMdFwR7oCCzKvDWU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        conChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
