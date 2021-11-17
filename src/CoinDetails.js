import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import crypto from './crypto.png';
import './CoinDetails.css';

const CoinDetails = () => {
  const arrowback = document.querySelector('#arrow-back');
  if (arrowback !== null) {
    arrowback.classList.remove('d-none');
  }
  const { state } = useLocation();
  const options2 = { style: 'currency', currency: 'USD' };
  const toDollars = new Intl.NumberFormat('en-US', options2);
  return (
    <div className="full-details-container d-flex">
      <div className="title-container">
        <img src={crypto} alt="eth" id="eth-logo" />
        <div className="alias">
          <h2>{ state.name }</h2>
          <h3>
            {' ( '}
            { state.symbol }
            {' ) '}
          </h3>
        </div>
      </div>
      <div id="detail-tag">
        <h4>
          { state.name }
          {' Data '}
        </h4>
      </div>
      <ListGroup className="data-container">
        <ListGroup.Item className="row">
          <h3>
            {'Full-Name: '}
            { state.name }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Symbol: '}
            { state.symbol }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Price: '}
            { toDollars.format(state.priceUsd) }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'BTC Price: ( '}
            { state.priceBtc }
            {' ) BTC'}
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Marketcap: '}
            { toDollars.format(state.mC) }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Total Supply: '}
            { state.tSp }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Rank: '}
            { state.rank }
          </h3>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CoinDetails;
