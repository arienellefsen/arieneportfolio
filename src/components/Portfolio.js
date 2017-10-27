import React from 'react';
import { NavLink} from 'react-router-dom';
import PortfolioListDetails from './PortfolioListDetails';


const Portfolio = (props) => {
  const portfolioItems = props.title.map((portfolio, i) => {
    return <PortfolioListDetails portfolio={portfolio}  key={i}/>
  });
    return(
        <div className='row'>
         <div className='col-md-12'>
            <h1>Portfolio</h1> 
          </div>
          <div className='col-md-4'>
            {portfolioItems}
        </div>
        <div className='col-md-8'>
           <h3> Show Details</h3>
        </div>
      </div>
    )
}

export default Portfolio;


