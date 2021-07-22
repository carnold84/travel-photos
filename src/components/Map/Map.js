import { forwardRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './Map.css';

const Map = forwardRef(({ markers = [], position }, ref) => {
  const [map, setMap] = useState(null);
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
    if (map) {
      ref.current = map;

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
  }, [map, ref]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={sizes}>
      <MapContainer
        bounds={position.zoom ?? 0}
        center={position.center ?? [0, 0]}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
        zoom={position.zoom ?? 0}>
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
      </MapContainer>
    </div>
  );
});

export default Map;
