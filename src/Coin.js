import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './Coin.css';

const Coin = (props) => {
  const {
    id, name, symbol, priceUsd, priceBtc,
  } = props;

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('details', {
      state: {
        id, name, symbol, priceUsd, priceBtc,
      },
    });
  };

  return (
    <ListGroup.Item key={id} onClick={goToDetails}>
      <div className="d-flex" id="data-container">
        <h3>{name}</h3>
        <p>
          {' ( '}
          {symbol}
          {' ) '}
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
};

export default Coin;
