import axios from 'axios';

const FETCH_COINS_DATA = 'FETCH_COINS_DATA';
const END_POINT_URL = 'https://api.coinlore.net/api/tickers/';

const initialState = [];

export const fetchCoins = () => async (dispatch) => {
  const response = await axios.get(END_POINT_URL);
  const payload = response.data.data.map((data) => {
    const { id } = data;
    const { name } = data;
    const { symbol } = data;
    const priceUsd = data.price_usd;
    const updatedData = {
      id,
      name,
      symbol,
      priceUsd,
    };
    return updatedData;
  });
  dispatch({
    type: FETCH_COINS_DATA,
    payload,
  });
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default coinsReducer;
