import React from 'react';
import {
  Navbar, Container, Button, Nav,
} from 'react-bootstrap';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import store from './redux/configureStore';
import HomePage from './HomePage';
import CoinDetails from './CoinDetails';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav.Link as={NavLink} to="/">
              <Button>
                <i className="fas fa-arrow-left" />
              </Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              <Navbar.Brand>Crypto Currencies</Navbar.Brand>
            </Nav.Link>
            <Navbar.Brand>2021</Navbar.Brand>
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
