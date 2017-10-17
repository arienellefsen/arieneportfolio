import React from 'react';
import { NavLink} from 'react-router-dom';

const Portfolio = (props) => {
let portfolioList = props.title;
let portfolios = portfolioList.map((portfolio) => {
  
   return (

        <div className="col-md-4 padding">
          <div className="portfolio-container">
          <div className="type-project">{portfolio.type}</div>
            <div className="image-portfolio"><h2>{portfolio.name}</h2></div>
            <p><strong><i>Technologies: </i></strong>{portfolio.Technology}</p>
            {/* <img className="portfolio-img" src={require(`../images/${portfolio.image}`)} alt={portfolio.name}/> */}
            <p className="portfolio-detail-link"><NavLink to={`\portfolio/${portfolio.id}`}> <button>More Details</button></NavLink> </p>
          </div>
        </div>
     );
   }); 
return (
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <h2 className="page-title-header">Portfolio</h2>
        </div>
    </div> 
        <div className="row">
            {portfolios} 
        </div>
</div>
    );
}
export default Portfolio;