import React from 'react';


const PortfolioDetailsList = ({portfolio}) => {

    if(!portfolio){
        return <div> ...Loading </div>;
    }
    return (
        <div>
               
                        <h1 className="title"> {portfolio.name} </h1>
                        <h2 className="description"> {portfolio.longDescription} </h2>
                        <h2 className="technologies">Technologies: {portfolio.Technology} </h2>
                        <p className="link"><strong>Visite Website:</strong> <a className="link-portfolio" href={portfolio.url} target="_blank">{portfolio.url}</a></p>
                  
        </div>
    );
};

export default PortfolioDetailsList;