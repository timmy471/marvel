import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Landing from './components/pages/Landing';
import Comics from './components/pages/Comics';
import CaptainMarvel from './components/pages/CaptainMarvel';
import Comic from './components/layouts/Comic';

import ComicsState from './context/ComicsState';



const App = () => {
  return (
    <ComicsState>
       <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/comics" component={Comics} />
        <Route exact path="/captainmarvel" component={CaptainMarvel} />
        <Route exact path ="/comic/:id" component={Comic} />
      </Switch>
      <Footer />
    </Router>
    </ComicsState>
   

  );
}

export default App;
