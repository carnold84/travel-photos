import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className={'spinner'}>
      <div className={'loader'}>
        <svg className={'circle'} viewBox="25 25 50 50">
          <circle
            className={'path'}
            cx="50"
            cy="50"
            r="15"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
