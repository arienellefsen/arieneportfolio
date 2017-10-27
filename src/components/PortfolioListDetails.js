import React, {Component} from 'react';

const PortfolioListDetails = ({portfolio}) => {
    console.log(portfolio);
   
    return(
        <div className='col-md-4'>
        <ul>
           <li> {portfolio.name}</li>
         </ul>
        </div>
    )
}

export default PortfolioListDetails;