import React from "react";

import {
    MapsWrapper,
    MapsWrapperItems,
    MapsContent,
    MapaContent,
    MapsDescription,
    MapsDescriptionTitle,
    MapsDescriptionContent
} from "./style";

// import "./styles.css";

import { useGoogleMaps } from "react-hook-google-maps";



const Mapa = () => {
  
  let lat = -22.28613903496477;
  let long = -42.542094971657946;

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290", //Google maps key
    // NOTE: even if you change options later
    {
      center: { lat: lat, lng: long },
      zoom: 16,
    }
  );

  if (map) {
    // execute when map object is ready
    var latLong = { lat: lat, lng: long };
    //nova posição
    new google.maps.Marker({
      position: latLong,
      map,
      title: "A Serra Júnior Engenharia é aqui!!",
    });
  }

  console.log(lat);
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return (
    <MapsWrapper>
      {/* <MapsWrapperItems> */}
        <MapsContent>
          <MapaContent ref={ref} />
        </MapsContent>
      {/* </MapsWrapperItems> */}
    </MapsWrapper>
  );
}

export default Mapa;