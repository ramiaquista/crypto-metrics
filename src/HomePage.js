import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import { fetchCountries } from './redux/countries/countries';

const HomePage = () => {
  const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, []);
  // console.log(countries);
  return (
    <Container>
      <ListGroup>
        {countries.map((country) => (
          <ListGroup.Item key={country.id}>
            <h3>{country.name}</h3>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
