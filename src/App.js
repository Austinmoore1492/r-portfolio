import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Routes from './components/layout/Routes';
import ScrollToTop from './components/layout/ScrollToTop';

import './styles.css';

const App = () => (
  <Router>
    <ScrollToTop>
      <Navbar />
      <Route component={Routes} />
    </ScrollToTop>
  </Router>
);

export default App;
