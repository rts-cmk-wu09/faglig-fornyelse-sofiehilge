import { useEffect, useRef } from "react";
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

export default function Playgrounds() {
  const mapRef = useRef(null);

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

    // fetch data for layer
    fetch(
      "https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:legeplads&outputFormat=json&SRSNAME=EPSG:4326"
    )
      .then((response) => response.json())

      .then((data) => {
        console.log("Fetched data:", data);
        const features = new GeoJSON().readFeatures(data);
        features.forEach((feature) => {
          const [longitude, latitude] = feature.getGeometry().getCoordinates();
          const pinFeature = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          });
          pinFeature.setStyle(iconStyle);
          geoJsonLayer.getSource().addFeature(pinFeature);
        });
      })
      .catch((err) => console.error(err));

    return () => map.setTarget(undefined);
  }, []);
  return (
    <div
      id="map"
      className="map"
      ref={mapRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
