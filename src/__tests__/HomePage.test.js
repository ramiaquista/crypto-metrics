import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import HomePage from '../HomePage';
import GlobalCryptoData from '../GlobalData';
import Coin from '../Coin';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('HomePage', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    coinsReducer: [
      {
        id: '1',
        name: 'Bitcoin-Test',
        symbol: 'BTC-TEST',
        priceUsd: '100',
        priceBtc: '1',
        marketCap: '32000',
        totalSupply: '333',
        rank: 1,
      },
    ],
    globalCryptoReducer: [
      {
        coinsCount: 345,
        activeMarkets: 4,
        totalMcap: 5543,
        totalVolume: 43214321,
        volumeChange: '4321',
      },
    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Create and show list of coins', () => {
    render(<HomePage />);
    expect(screen.getByTestId('list-container')).toBeInTheDocument();
  });
  test('Create and display GlobalCrypto Data component', () => {
    const globalData = useSelectorMock(
      (mockStore) => mockStore.globalCryptoReducer[0],
    );
    render(
      <GlobalCryptoData
        key={globalData.coinsCount}
        coinsCount={globalData.coinsCount}
        activeMarkets={globalData.activeMarkets}
        totalMcap={globalData.totalMcap}
        totalVolume={globalData.totalVolume}
        volumeChange={globalData.volumeChange}
      />,
    );
    expect(screen.getByTestId('global-crypto-data-container')).toBeInTheDocument();
  });
  test('Create Coin Component inside Rockets List', () => {
    const coinData = useSelectorMock((mockStore) => mockStore.coinsReducer[0]);
    render(
      <Coin
        key={coinData.id}
        id={coinData.id}
        name={coinData.name}
        symbol={coinData.symbol}
        priceUsd={coinData.priceUsd}
        priceBtc={coinData.priceBtc}
        mC={coinData.marketCap}
        tSp={coinData.totalSupply}
        rank={coinData.rank}
      />,
    );
    expect(screen.getByTestId('list-group-item')).toBeInTheDocument();
  });
});
