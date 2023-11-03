import { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { Style, Icon } from "ol/style";
import { XYZ } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON.js";
import { FullScreen, defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { Flex } from "@chakra-ui/react";

export default function Playgrounds() {
  const mapRef = useRef(null);

  const [legeplads, setLegeplads] = useState("");

  const pinSrc =
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0C8.48 0 6 2.688 6 6c0 2.66 1.952 6.434 6 11.07 4.048-4.636 6-8.41 6-11.07 0-3.312-2.48-6-6-6zm0 8c-1.104 0-2-.896-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.104-.896 2-2 2z" fill="%23ff0000" /></svg>`
    );

  useEffect(() => {
    if (!mapRef.current) return;
    //icon style

    const iconStyle = new Style({
      image: new Icon({
        color: "rgba(255, 0, 0, .5)",
        crossOrigin: "anonymous",
        src: pinSrc,
      }),
    });

    //layer with points

    const geoJsonLayer = new VectorLayer({
      source: new VectorSource({}),
      style: iconStyle,
    });

    //api and key
    const key = "arbWFpzMUfWfbX78oSoD";

    //map

    const mapSource = new TileLayer({
      source: new XYZ({
        url:
          "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" + key,
      }),
    });
    //view
    const view = new View({
      center: [1400918.2566687095, 7494195.501245048],
      zoom: 12,
      projection: "EPSG:3857",
    });

    //map with layer
    const map = new Map({
      target: mapRef.current,
      controls: defaultControls().extend([new FullScreen()]),
      layers: [mapSource, geoJsonLayer],
      view: view,
    });

    const setPlaygroundName = (name) => {
      setLegeplads(name);
    };

    const displayFeatureInfo = function (pixel) {
      const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
      if (feature) {
        const name = feature.get("name");
        if (name) {
          document.getElementById("info").innerHTML = name;
        }
      } else {
        document.getElementById("info").innerHTML = "";
      }
    };

    map.on("pointermove", function (evt) {
      if (evt.dragging) {
        return;
      }
      const pixel = map.getEventPixel(evt.originalEvent);
      displayFeatureInfo(pixel);
    });

    let dataFetched = false
    // fetch data for layer
    const fetchData = async () => {
      try {
        if(dataFetched)return;
  dataFetched=true;//set the flag to true if data has been fetched
        const response = await fetch(
          "https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:legeplads&outputFormat=json&SRSNAME=EPSG:4326"
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        const features = new GeoJSON().readFeatures(data);
        const playgroundNames = features.map((feature) => feature.get("navn"));
        console.log("List of playgroundnames", playgroundNames);
        features.forEach((feature) => {
          const [longitude, latitude] = feature
            .getGeometry()
            .getCoordinates()[0];
          const pinFeature = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          });

          pinFeature.setStyle(iconStyle);
          pinFeature.setProperties({
            name: feature.get("navn"),
          });
          geoJsonLayer.getSource().addFeature(pinFeature);
        });
        map.updateSize(); //force map to update when features are added
      } catch (err) {
        console.error("error fetching data: ", err);
      }
    };

    fetchData();
    return () => map.setTarget(undefined);
  }, []);
  return (
    <>
      <div
        id="map"
        className="map"
        ref={mapRef}
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
        justifyContent={"center"}
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
          w={800}
          h={10}
        >
          <div id="info">&nbsp;</div>
        </Flex>
      </Flex>
    </>
  );
}
