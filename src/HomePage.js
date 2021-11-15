import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { fetchCoins } from './redux/coins/coins';
import Coin from './Coin';

const HomePage = () => {
  const coins = useSelector((state) => state.coinsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, []);
  const [coinInput, setInput] = useState('');
  const list = coins
    .filter((coin) => coinInput === '' || coin.name.includes(coinInput));
  return (
    <Container>
      <Form.Control
        value={coinInput}
        onInput={(e) => setInput(e.target.value)}
        type="text"
        required
        placeholder="Search Crypto Name"
        id="name-input"
      />
      <ListGroup>
        {list.map((coin) => (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            priceUsd={coin.priceUsd}
            priceBtc={coin.priceBtc}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
