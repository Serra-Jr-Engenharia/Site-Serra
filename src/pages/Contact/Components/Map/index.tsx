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

function Mapa() {
  var lat = -22.74647733279337;
  let long = -42.855017880073255;

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "", //Google maps key
    // NOTE: even if you change options later
    {
      center: { lat: lat, lng: long },
      zoom: 15,
    }
  );

  if (map) {
    // execute when map object is ready

    var latLong = { lat: lat, lng: long };
    //nova posição
    new google.maps.Marker({
      position: latLong,
      map,
      title: "A Prownovar é aqui!!",
    });
  }

  console.log(lat);
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return (
    <MapsWrapper>
      <MapsWrapperItems>
        <MapsContent>
          <MapaContent ref={ref} />
        </MapsContent>
        <MapsDescription>
          <MapsDescriptionTitle>Venha nos fazer uma visita!</MapsDescriptionTitle>
          <MapsDescriptionContent>Endereço: Avenida 22 de Maio, 5990, Bloco 02 Sala 610</MapsDescriptionContent>
          <MapsDescriptionContent>Centro - Itaboraí - RJ</MapsDescriptionContent>
          <MapsDescriptionContent>CEP 24800-097</MapsDescriptionContent>
          
        </MapsDescription>
      </MapsWrapperItems>
    </MapsWrapper>
  );
}

export default Mapa;