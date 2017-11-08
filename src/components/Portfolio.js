import React, { Component } from 'react';
import portfolioData from '../data/portfolioData';
import PortfolioList from './PortfolioList';
import PortfolioDetailsList from './PortfolioDetailsList';

class Portfolio extends Component {
  constructor (props) {
        super(props);
        this.state = {portfolio: portfolioData,  selectPortfolio : portfolioData[0]}
      }
  render(){
    return(
        <div> 
                <div className="container-fluid">
                   <div className="row">
                      <div className="col-md-5 center">
                        <PortfolioDetailsList 
                            portfolio={this.state.selectPortfolio} />
                      </div>
                      <div className="col-md-7 center">
                        <PortfolioList 
                            portfolioSelect ={selectPortfolio => this.setState({selectPortfolio})}
                            portfolio={this.state.portfolio} />
                      </div>
                    </div>
                </div>
      </div>
    )
  }

}

export default Portfolio;