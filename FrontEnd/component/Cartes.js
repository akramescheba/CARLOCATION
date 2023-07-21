import React from 'react';
import MapView, {  Marker } from 'react-native-maps';

export default function Cartes() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 17,
        longitude: 18,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: 17,
          longitude: 18,
        }}
        title="Votre position"
      />
    </MapView>
  );
}
