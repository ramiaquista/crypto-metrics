import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { fetchCoins } from './redux/coins/coins';
import { fetchGloblalData } from './redux/global/global';
import Coin from './Coin';
import GlobalCryptoData from './GlobalData';

const HomePage = () => {
  const arrowback = document.querySelector('#arrow-back');
  if (arrowback !== null) {
    arrowback.classList.add('d-none');
  }
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(fetchGloblalData());
  }, []);
  const coins = storeData.coinsReducer;
  const globalData = storeData.globalCryptoReducer;
  const [coinInput, setInput] = useState('');
  const listCoins = coins.filter(
    (coin) => coinInput === '' || coin.name.toLowerCase().includes(coinInput) || coin.name.includes(coinInput),
  );
  return (
    <Container>
      {globalData.map((data) => (
        <GlobalCryptoData
          key={data.coinsCount}
          coinsCount={data.coinsCount}
          activeMarkets={data.activeMarkets}
          volumeChange={data.volumeChange}
        />
      ))}
      <Form.Control
        value={coinInput}
        onInput={(e) => setInput(e.target.value)}
        type="text"
        required
        placeholder="Search by Crypto name"
        id="name-input"
      />
      <div id="home-tag">
        <p>MOST POPULAR COINS</p>
      </div>
      <ListGroup data-testid="list-container">
        {listCoins.map((coin) => (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            priceUsd={coin.priceUsd}
            priceBtc={coin.priceBtc}
            mC={coin.marketCap}
            tSp={coin.totalSupply}
            rank={coin.rank}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
