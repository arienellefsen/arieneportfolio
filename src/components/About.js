import React from 'react';

const About = (props) => (
  <section className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title-header">{ props.title }</h2>
          </div>
          <div className="col-md-4 col-sm-10 col-xs-10">
              <div className="profile-image-container">              
                  <img src={require(`../images/Ariene-Ellefsen.jpg.jpg`)} alt="Ariene Ellefsen" className="profile-image img-fluid"/>
                   <p className="quote">I have a passion for coding, I believe in life long learning and the power of design.</p>           
              </div>            
          </div>
          <div className="col-md-7 col-sm-10 col-xs-10 content-about">
                <h1>About </h1>
                <p>I am Ariene,  a professional Full Stack Developer. My combined technical expertise, extensive web knowledge, creativity, dedication, and problem-solving skills enable me to play a key role on a team. I work with others to build robust web applications using the latest technologies in web development while applying the principles and power of design. The result provides an unparalleled freedom to simultaneously collaborate on the various layers of the infrastructure required for any platform or application. </p>
                <p>Outside of work I enjoy leading an active and mindful lifestyle by practicing yoga, paddleboarding and travelling around the world. </p>
                <br />
                <a href="https://drive.google.com/file/d/0B98TqNWe3btVN2ZER05mVko2Mk0/view" target="_blank" className="resume-link">My Resume</a>
                <div className="social-icons">              
                    <a href="https://www.linkedin.com/in/ariene-ellefsen-7376a531/" target="_blank" ><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/arienellefsen" target="_blank" ><i className="fa fa-github" aria-hidden="true"></i></a>  
               </div>
          </div>
        </div>
      </div>
  </section>
);

export default About;