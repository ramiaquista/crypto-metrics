import axios from 'axios';

const FETCH_COUNTRIES_DATA = 'FETCH_COUNTRIES_DATA';
const END_POINT_URL = 'https://api.covid19tracking.narrativa.com/api/countries';

const initialState = [];

export const fetchCountries = () => async (dispatch) => {
  const response = await axios.get(END_POINT_URL);
  const payload = response.data.countries.map((data) => {
    const { id } = data;
    const { links } = data;
    const { name } = data;
    const updatedData = {
      id,
      links,
      name,
    };
    return updatedData;
  });
  dispatch({
    type: FETCH_COUNTRIES_DATA,
    payload,
  });
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
