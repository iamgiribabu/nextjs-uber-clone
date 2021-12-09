import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2lyaWJhYnUwNiIsImEiOiJja3ZtYjhhd2kxZTZ4Mm50azBkejdkdzZmIn0.jXkDKlh6L0G1F4QE8goeww";

const Map = (props) => {
  console.log(props, "✅");
  const { pickupCoordinates, dropoffCoordinates } = props;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.038, 22.98],
      zoom: 3,
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, pickupCoordinates, dropoffCoordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(pickupCoordinates)
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1 h-1/2
`;

export default Map;
