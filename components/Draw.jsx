import { useEffect, useRef } from "react";
import Draw from "ol/interaction/Draw.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/WebGLTile.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import XYZ from "ol/source/XYZ.js";
import { Flex } from "@chakra-ui/react";

const key = process.env.XYZ_API_KEY;

export default function custome() {
  const mapRef = useRef(null);
  let drawInteraction; //save drawing data in a variable

  useEffect(() => {
    if (!mapRef.current) return;
    //map is loaded
    const mapSource = new TileLayer({
      source: new XYZ({
        url: "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=arbWFpzMUfWfbX78oSoD",
        maxZoom: 20,
      }),
    });

    //implement drawing features

    const drawVector = new VectorLayer({
      source: new VectorSource(),
      style: {
        "stroke-color": "lightcoral",
        "stroke-width": 2,
        "fill-color": "rgba(156, 39, 176, 0.3)",
      },
    });

    const map = new Map({
      target: mapRef.current,
      layers: [mapSource, drawVector],
      view: new View({
        center: [1400918.2566687095, 7494195.501245048],
        zoom: 6,
        projection: "EPSG:3857",
      }),
    });

    const typeSelect = document.getElementById("type");

    function addInteraction() {
      const value = typeSelect.value;
      if (value !== "None") {
        drawInteraction = new Draw({
          type: value,
          source: drawVector.getSource(),
          trace: true,
        });
        map.addInteraction(drawInteraction);
      }
    }
    typeSelect.onChange = function () {
      map.remoceInteraction(drawInteraction);
      addInteraction();
    };
    addInteraction();
    console.log("map render");

    return () => map.setTarget(undefined);
  }, []);

  return (
    <>
      <div
        ref={mapRef}
        id="map"
        className="map"
        style={{ width: "100vw", height: "100vh" }}
      />
      <Flex
        position={"absolute"}
        bottom={0}
        left={0}
        width={"full"}
        px={4}
        py={2}
        zIndex={101}
      >
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
          /*   onClick={() => setType("attractions")} */
        >
          <form>
            <label htmlFor="type" ml={3} fontSize={16} fontWeight={500}>
              Geometry type &nbsp;
            </label>
            <select
              id="type"
              bg={"white"}
              rounded={"full"}
              ml={4}
              shadow="lg"
              cursor={"pointer"}
              _hover={{ bg: "gray.100" }}
            >
              <option ml={3} fontSize={16} fontWeight={500} value="Polygon">
                Polygon
              </option>
              <option ml={3} fontSize={16} fontWeight={500} value="LineString">
                Line
              </option>
              <option ml={3} fontSize={16} fontWeight={500} value="None">
                None
              </option>
            </select>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
