import React from 'react';
const PortfolioListItems = ({portfolio, portfolioSelect}) => {
    return (
            <div className="portfolio-card" onClick={()=> portfolioSelect(portfolio)}>
                      <h4 className="card-title">{portfolio.name}</h4>
                 
            </div>        
    )  
}
export default PortfolioListItems;