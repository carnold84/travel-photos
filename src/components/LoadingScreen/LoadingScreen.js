import React from 'react';
import Spinner from '../Spinner';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className={'loading_screen'}>
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
