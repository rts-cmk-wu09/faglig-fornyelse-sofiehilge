import GeoJSON from "ol/format/GeoJSON.js";
import Map from "ol/Map.js";
import VectorImageLayer from "ol/layer/VectorImage";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import { useRef, useEffect } from "react";
import { Flex } from "@chakra-ui/react";

export default function Ecoregion() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const vectorLayer = new VectorImageLayer({
      background: "#1a2b39",
      imageRatio: 2,
      source: new VectorSource({
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: new GeoJSON(),
      }),
      style: {
        "fill-color": ["string", ["get", "COLOR"], "#eee"],
      },
    });

    const map = new Map({
      layers: [vectorLayer],
      target: mapRef.current, // Use the current property of the ref object
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });

    const featureOverlay = new VectorLayer({
      source: new VectorSource(),
      map: map,
      style: {
        "stroke-color": "rgba(255, 255, 255, 0.7)",
        "stroke-width": 2,
      },
    });

    let highlight;
    const displayFeatureInfo = function (pixel) {
      const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });

      const info = document.getElementById("info");
      if (feature) {
        info.innerHTML = feature.get("ECO_NAME") || "&nbsp;";
      } else {
        info.innerHTML = "&nbsp;";
      }

      if (feature !== highlight) {
        if (highlight) {
          featureOverlay.getSource().removeFeature(highlight);
        }
        if (feature) {
          featureOverlay.getSource().addFeature(feature);
        }
        highlight = feature;
      }
    };

    map.on("pointermove", function (evt) {
      if (evt.dragging) {
        return;
      }
      const pixel = map.getEventPixel(evt.originalEvent);
      displayFeatureInfo(pixel);
    });

    map.on("click", function (evt) {
      displayFeatureInfo(evt.pixel);
    });

    console.log("map render");
    return () => map.setTarget(undefined);
  }, []);

  return (
    <>
      <div ref={mapRef} style={{ width: "100vw", height: "100vh" }} />
      <Flex
        position={"absolute"}
        bottom={0}
        left={0}
        width={"full"}
        px={4}
        py={2}
        justifyContent={"center"}
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
          w={700}
          /*   onClick={() => setType("attractions")} */
        >
          <div id="info">&nbsp;</div>
        </Flex>
      </Flex>
    </>
  );
}
