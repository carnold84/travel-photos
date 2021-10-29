import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  FeatureGroup,
  Tooltip,
} from 'react-leaflet';
import Picture from '../Picture';
import './Map.css';

const Map = forwardRef(({ markers = [], position }, ref) => {
  const elMarkerGroup = useRef(null);

  const onCreated = (evt) => {
    const nextMap = evt;
    nextMap.fitBounds(elMarkerGroup.current.getBounds(), {
      padding: [40, 40],
    });
    ref.current = nextMap;
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer
        bounds={position.zoom ?? 0}
        center={position.center ?? [0, 0]}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        whenCreated={onCreated}
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
        <FeatureGroup ref={elMarkerGroup}>
          {markers.map((marker) => {
            if (marker.latitude && marker.longitude) {
              return (
                <Marker
                  key={marker.id}
                  eventHandlers={{
                    click: marker.onClick,
                  }}
                  position={[marker.latitude, marker.longitude]}>
                  <Tooltip>
                    <div
                      style={{
                        height:
                          marker.orientation === 'portrait' ? '200px' : null,
                        width:
                          marker.orientation === 'landscape' ? '200px' : null,
                      }}>
                      <Picture
                        alt={marker.name}
                        height={
                          marker.orientation === 'portrait' ? '200px' : null
                        }
                        url={marker.thumbUrl}
                        width={
                          marker.orientation === 'landscape' ? '200px' : null
                        }
                      />
                    </div>
                    <div style={{ margin: '5px 0 0', textAlign: 'center' }}>
                      Click marker to view
                    </div>
                  </Tooltip>
                </Marker>
              );
            }

            return null;
          })}
        </FeatureGroup>
      </MapContainer>
    </div>
  );
});

export default Map;
