import React, { Component } from 'react';
import Tilt from 'react-tilt'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="maininner-1">
          <h1>
            FULL<br/>
            STACK<br/>
            ENGINEER
          </h1>
          <div className="deco"></div>
          <p>
           Hi, my name is Sohee Lim. I am a full stack software engineer focused on Javascript. I am very passionate!!!!!!!!!!!!!!!!!!!!!!!!! 
          </p>
          <p>
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttext
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
            <h3 className="name">{`Linkedintext`}</h3>
          </a>
          <a href="mailto:limsohee1002@gmail.com">
            <h3 className="email">{`Emailtext`}</h3>
          </a>
           <a href="https://github.com/limsohee1002" target="_blank"><h3 className="loc">{`Githubtext`}</h3></a>
         </div>
      </div>
    );
  }
}

export default Main;
