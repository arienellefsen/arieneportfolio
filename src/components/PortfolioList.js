import React from 'react';

import PortfolioListItems from './PortfolioListItems';

const PortfolioList = ({portfolio, portfolioSelect}) => {
  const portItems = portfolio.map((portfolio, i) => {
    return <PortfolioListItems
    portfolioSelect = {portfolioSelect}
    portfolio={portfolio}  key={i}/>
  });
   console.log(portfolio);
    return(
       <ul>{portItems}</ul>
    )
}

export default PortfolioList;