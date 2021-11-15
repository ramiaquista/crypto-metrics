import axios from 'axios';

const FETCH_GLOBAL_DATA = 'FETCH_GLOBAL_DATA';
const END_POINT_URL = 'https://api.coinlore.net/api/global/';

const initialState = [];

export const fetchGloblalData = () => async (dispatch) => {
  const response = await axios.get(END_POINT_URL);
  const payload = response.data.map((data) => {
    const coinsCount = data.coins_count;
    const activeMarkets = data.active_markets;
    const totalMcap = data.total_mcap;
    const totalVolume = data.total_volume;
    const volumeChange = data.volume_change;
    const updatedData = {
      coinsCount,
      activeMarkets,
      totalMcap,
      totalVolume,
      volumeChange,
    };
    return updatedData;
  });
  dispatch({
    type: FETCH_GLOBAL_DATA,
    payload,
  });
};

const globalCryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default globalCryptoReducer;
