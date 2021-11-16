import coinsReducer from '../redux/coins/coins';

const prevState = [];

const fetchCoins = () => {
  const fetchedData = {
    id: '1',
    name: 'Test Coin',
    symbol: 'TEST',
    priceUsd: '100',
    priceBtc: '1',
    marketCap: '222',
    totalSupply: '323',
    rank: 1,
  };
  return prevState.push(fetchedData);
};

describe('CoinsReducer Testing', () => {
  test('Testing initial state coinsReducer', () => {
    expect(coinsReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to coinsReducer', () => {
    expect(coinsReducer(prevState, fetchCoins())).toEqual([
      {
        id: '1',
        name: 'Test Coin',
        symbol: 'TEST',
        priceUsd: '100',
        priceBtc: '1',
        marketCap: '222',
        totalSupply: '323',
        rank: 1,
      },
    ]);
  });
});
