import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import './Map.css';

const MapInner = ({ markers }) => {
  const map = useMap();

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

const Map = ({ markers = [] }) => {
  const [sizes, setSizes] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const onResize = () => {
    setSizes({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={sizes}>
      <MapContainer
        center={[0, 0]}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        zoom={1}>
        <MapInner markers={markers} />
      </MapContainer>
    </div>
  );
};

export default Map;
