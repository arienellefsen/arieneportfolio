import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Footer from './Footer';

class Home extends Component {    
 render() {
    return (
      <div className="home-section">
         <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-9 center">
                  <h2 className="home-introduction text-center">Hello! I am Ariene Ellefsen, a Full Stack Web Developer & Graphic Designer based in Summit New Jersey. <br /></h2>                            
                    <div className="arrow-bottom text-center"></div>
                        <p className="my-work-link text-center">See My Recent Projects </p>
                        <article className='basicDimen downArrow'></article>
                    </div> 
                </div> 
          </div> 
      <div id="1"></div>
      <section className="portfolio" > 
          <div className="container-fluid">
            <div className='portfolio'>
                <Portfolio />
            </div> 
          </div> 
      </section>
       
     <div id="2"></div>
       <section className="about"> 
          <div className="container-fluid">
                <About />
          </div> 
       </section>
        <Footer />
    </div> 
    );
  }
}

export default Home;



