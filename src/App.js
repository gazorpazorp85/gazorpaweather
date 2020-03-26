import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.scss';

import Header from './cmps/Header';
import Home from './pages/Home';
import Footer from './cmps/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
