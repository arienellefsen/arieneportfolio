import React from 'react';
import { Link} from 'react-router-dom';

function newDoc() {
    window.location.assign("https://drive.google.com/file/d/0B98TqNWe3btVN2ZER05mVko2Mk0/view")
}

const About = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="page-title-header">{ props.title }</h2>
      </div>
      <div className="col-md-3">
        <img className="portfolio-img" src={require(`../images/ariene-ellefsen-profile-img.jpg`)} alt="Ariene Ellefsen"/>
      </div>
      <div className="col-md-9">
        <p className='header-about'>Hello! I am Ariene Ellefsen </p>
        <p>I am a professional Full Stack Developer. My combined technical expertise, extensive web knowledge, creativity, dedication, and problem-solving skills enable me to play a key role on a team. I work with others to build robust web applications using the latest technologies in web development while applying the principles and power of design. The result provides an unparalleled freedom to simultaneously collaborate on the various layers of the infrastructure required for any platform or application. </p>
        <p className="quote"><i>I have a passion for coding, I believe in life long learning and the power of design.</i></p>
        <p>Outside of work I enjoy leading an active and mindful lifestyle by practicing yoga, paddleboarding and travelling around the world.

 </p>
       <br/>
      <a href="https://drive.google.com/file/d/0B98TqNWe3btVN2ZER05mVko2Mk0/view" target="_blank" ><button className="button-about" target="_blank">My Resume</button></a>
      <a href="https://www.linkedin.com/in/ariene-ellefsen-7376a531/" target="_blank" ><button className="button-about">LinkedIn</button></a>
      <a href="https://github.com/arienellefsen"><button className="button-about" target="_blank">GitHub</button></a>
      </div>
    </div>
  </div>
);

export default About;