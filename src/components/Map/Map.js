import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import './Map.css';

const MapInner = ({ markers }) => {
  const map = useMap();
  console.log(map);

  useEffect(() => {
    if (map) {
      const boundsZoom = map.getBoundsZoom(
        [
          [-85.0511, -180],
          [85.0511, 180],
        ],
        true
      );
      map.setMinZoom(boundsZoom);
      map.setMaxBounds([
        [-85.0511, -180],
        [85.0511, 180],
      ]);
    }
  }, [map]);

  return (
    <>
      <TileLayer
        attribution={
          'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
        }
        noWrap={true}
        url={
          'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
        }
      />
      {markers.map((marker) => {
        if (marker.latitude && marker.longitude) {
          return (
            <Marker
              key={marker.id}
              eventHandlers={{
                click: marker.onClick,
              }}
              position={[marker.latitude, marker.longitude]}
            />
          );
        }

        return null;
      })}
    </>
  );
};

const Map = ({ height, markers, width }) => {
  return (
    <MapContainer
      center={[0, 0]}
      scrollWheelZoom={true}
      style={{ height, width }}
      zoom={1}>
      <MapInner markers={markers} />
    </MapContainer>
  );
};

export default Map;
