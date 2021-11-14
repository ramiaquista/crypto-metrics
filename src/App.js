import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from './redux/configureStore';
import HomePage from './HomePage';

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              Covid Tracker 2021
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <HomePage />
    </Router>

  </Provider>
);

export default App;
