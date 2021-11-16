import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import crypto from './crypto.png';
import './Coin.css';

const Coin = (props) => {
  const {
    id, name, symbol, priceUsd, priceBtc, mC, tSp, rank,
  } = props;

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('details', {
      state: {
        id, name, symbol, priceUsd, priceBtc, mC, tSp, rank,
      },
    });
  };

  const options2 = { style: 'currency', currency: 'USD' };
  const toDollars = new Intl.NumberFormat('en-US', options2);

  return (
    <ListGroup.Item key={id} onClick={goToDetails}>
      <div className="d-flex" id="data-container">
        <div className="bottom-data d-flex">
          <img src={crypto} alt="eth" className="eth-icon" />
          <i className="far fa-arrow-alt-circle-right" />
        </div>
        <h3>{name}</h3>
        <p>
          {' ( '}
          {symbol}
          {' ) '}
        </p>
        <p>
          { toDollars.format(priceUsd) }
        </p>
      </div>
    </ListGroup.Item>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  priceBtc: PropTypes.string.isRequired,
  mC: PropTypes.string.isRequired,
  tSp: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
