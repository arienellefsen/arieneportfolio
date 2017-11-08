import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import PortfolioDetails from './PortfolioDetails';
import portfolioData from '../data/portfolioData';
import Video from './Video';
      
  class App extends Component{
    constructor(props){
      super(props);
        this.state = { 
          videos: [],
          portfolio: [],
        };
    }
    render(){
      return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={ () => <About title='About' /> } />
            <Route exact path="/portfolio" render={ (props) => <Portfolio title={this.state.portfolio} selectedVideo={this.state.selectedPortfolio} {...props}/>} />
            <Route path="/portfolio/:id" render={ (props) => <PortfolioDetails title={portfolioData} {...props}/>}/>
            <Route path="/video" component={Video} />}  />
            <Route component={NotFound} />
          </Switch>
        </div>
     </BrowserRouter>
      )
    }
  }
export default App;




