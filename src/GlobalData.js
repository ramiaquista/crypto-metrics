import React from 'react';
import PropTypes from 'prop-types';
import blockchain from './blockchain.png';
import './GlobalData.css';

const GlobalCryptoData = (props) => {
  const {
    coinsCount, activeMarkets, volumeChange,
  } = props;

  return (
    <div className="global-data-container d-flex" data-testid="global-crypto-data-container">
      <div className="d1">
        <img src={blockchain} alt="blockchain" className="blockchain-icon" />
      </div>
      <div className="d2">
        <h2>GLOBAL STATS </h2>
        <p>
          {'Total coins on market: '}
          {coinsCount}
        </p>
        <p>
          {'Total active markets: '}
          {activeMarkets}
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
  volumeChange: PropTypes.string.isRequired,
};

export default GlobalCryptoData;
