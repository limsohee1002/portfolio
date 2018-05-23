import React, { Component } from 'react';
import Tilt from 'react-tilt'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="maininner-1">
          <h1>
            SOFT<br/>
            WARE<br/>
            ENGINEER
          </h1>
          <div className="deco"></div>
          <p>
           Hi, my name is Sohee Lim. I am a full stack software engineer focused on Javascript. I am very passionate about this and that ans somthing. 
          </p>
          <p>
            I was working as graphoc designer, studied interiordesign, my hobby, love working as team
          </p>
          <a href="./resume.pdf" target="_blank">
          <h2>
            CV
          </h2>
          </a>
         </div>
         <div className="maininner-2">
          <Tilt className="Tilt" options={{ max : 20 ,  perspective: 10000 , scale: 1.02}}>
            <img className="main-image" src="./main-image.png"/>
          </Tilt>
          <a href="http://www.linkedin.com/in/soheelim1002/" target="_blank">
            <h3 className="name">{`<SoheeLim />`}</h3>
          </a>
          <a href="mailto:limsohee1002@gmail.com">
            <h3 className="email">{`{limsohee1002`}<br/><span>{`@gmail.com}`}</span></h3>
          </a>
           <a href="https://github.com/limsohee1002" target="_blank"><h3 className="loc">{`(sohee) =>`}<br/><span>{`{return 'gitHub'}`}</span></h3></a>
         </div>
      </div>
    );
  }
}

export default Main;
