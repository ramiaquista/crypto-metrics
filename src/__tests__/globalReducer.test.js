import globalCryptoReducer from '../redux/global/global';

const prevState = [];

const fetchGloblalData = () => {
  const fetchedData = {
    coinsCount: 345,
    activeMarkets: 4,
    totalMcap: 5543,
    totalVolume: 43214321,
    volumeChange: '4321',
  };
  return prevState.push(fetchedData);
};

describe('globalCryptoReducer Testing', () => {
  test('Testing initial state globalCryptoReducer', () => {
    expect(globalCryptoReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to globalCryptoReducer', () => {
    expect(globalCryptoReducer(prevState, fetchGloblalData())).toEqual([
      {
        coinsCount: 345,
        activeMarkets: 4,
        totalMcap: 5543,
        totalVolume: 43214321,
        volumeChange: '4321',
      },
    ]);
  });
});
