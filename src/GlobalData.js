import React from 'react';
import PropTypes from 'prop-types';
import './GlobalData.css';

const GlobalCryptoData = (props) => {
  const {
    coinsCount, activeMarkets, totalMcap, totalVolume, volumeChange,
  } = props;

  const options2 = { style: 'currency', currency: 'USD' };
  const toDollars = new Intl.NumberFormat('en-US', options2);

  return (
    <div className="global-data-container d-flex" data-testid="global-crypto-data-container">
      <div className="d1" />
      <div className="d2">
        <h2>Global Stats: </h2>
        <p>
          {'Total coins on market: '}
          {coinsCount}
        </p>
        <p>
          {'Total active markets: '}
          {activeMarkets}
        </p>
        <p>
          {'Market cap value: '}
          {toDollars.format(totalMcap)}
        </p>
        <p>
          {'Total volume: '}
          {toDollars.format(totalVolume)}
        </p>
        <p>
          {'Volume of change: '}
          {volumeChange}
        </p>
      </div>
    </div>
  );
};

GlobalCryptoData.propTypes = {
  coinsCount: PropTypes.number.isRequired,
  activeMarkets: PropTypes.number.isRequired,
  totalMcap: PropTypes.number.isRequired,
  totalVolume: PropTypes.number.isRequired,
  volumeChange: PropTypes.string.isRequired,
};

export default GlobalCryptoData;
