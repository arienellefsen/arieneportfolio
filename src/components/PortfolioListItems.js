import React from 'react';

const PortfolioListItems = ({portfolio, portfolioSelect}) => {
    return (

<div className="card" onClick={()=> portfolioSelect(portfolio)}>
  <img className="card-img-top" />
  <div className="card-block">
    <h4 className="card-title">{portfolio.name}</h4>
  </div>
</div>
        
    )
  
}

export default PortfolioListItems;