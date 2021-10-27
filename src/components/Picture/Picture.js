import React, { useEffect, useRef, useState } from 'react';
import Spinner from '../Spinner';
import './Picture.css';

const Picture = ({ alt = '', height = '100%', url, width = '100%' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const elWrapper = useRef();
  const elImage = useRef();

  const onImageLoaded = () => {
    setOpacity(1);
    setIsLoading(false);
  };

  useEffect(() => {
    elImage.current.src = url;
  }, [url]);

  return (
    <div className={'picture'} ref={elWrapper} style={{ height, width }}>
      {isLoading && (
        <div className={'loading_screen'}>
          <Spinner />
        </div>
      )}
      <div
        className={'picture_container'}
        style={{
          height,
          opacity,
          width,
        }}>
        <img
          className={'image'}
          alt={alt}
          onLoad={onImageLoaded}
          ref={elImage}
          style={{ height, width }}
        />
      </div>
    </div>
  );
};

export default Picture;
