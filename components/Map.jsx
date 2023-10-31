import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const [center, setCenter] = useState(coordinates);
  return (
    <Box width={"full"} height={"full"}>
      {coordinates ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB9J4u5-MnfqKarI5OMMdFwR7oCCzKvDWU" }}
          defaultCenter={coordinates}
          center={center}
          defaultZoom={10}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCenter({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={() => {}}
        >
          {places?.map((place, i) => (
            <div
              key={place.location_id}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(-50%, -50%)",
              }}
            >
              <IoLocation color="red" fontSize={30} />
            </div>
          ))}
        </GoogleMapReact>
      ) : (
        <div>Loading map...</div>
      )}
    </Box>
  );
};

export default Map;
