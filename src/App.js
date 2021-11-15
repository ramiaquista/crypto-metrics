import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import HomePage from './HomePage';
import CoinDetails from './CoinDetails';

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Crypto Currencies</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<CoinDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
