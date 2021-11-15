import React from 'react';
import {
  useLocation,
} from 'react-router-dom';

const CoinDetails = () => {
  const { state } = useLocation();
  return (
    <div className="full-details">
      <h3>{ state.name }</h3>
      <h3>{ state.symbol }</h3>
      <h3>{ state.priceUsd }</h3>
      <h3>{ state.priceBtc}</h3>
    </div>
  );
};

export default CoinDetails;
