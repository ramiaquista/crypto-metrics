import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import { fetchCoins } from './redux/coins/coins';

const HomePage = () => {
  const coins = useSelector((state) => state.coinsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, []);
  return (
    <Container>
      <ListGroup>
        {coins.map((coin) => (
          <ListGroup.Item key={coin.id}>
            <h3>{coin.name}</h3>
            <p>{coin.priceUsd}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
