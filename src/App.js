import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import UXResearch from './components/pages/UXResearch';
import UIUXDesign from './components/pages/UIUXDesign';
import DesignSystem from './components/pages/DesignSystem';
import BrandStrategy from './components/pages/BrandStrategy';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/UXResearch' component={UXResearch} />
        <Route path='/UIUXDesign' component={UIUXDesign} />
        <Route path='/DesignSystem' component={DesignSystem} />
        <Route path='/BrandStrategy' component={BrandStrategy} />
      </Switch>
    </Router>
  );
}

export default App;
