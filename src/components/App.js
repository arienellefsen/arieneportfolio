import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  IndexRoute
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import PortfolioDetails from './PortfolioDetails';
import portfolioData from '../data/portfolioData';

const App = (props) => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/portfolio" render={ (props) => <Portfolio title={portfolioData} {...props}/>} />
        <Route path="/portfolio/:id" render={ (props) => <PortfolioDetails title={portfolioData} {...props}/>}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




