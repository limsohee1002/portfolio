import React, { Component } from 'react';
import ScrollableAnchor, { goToTop,configureAnchors } from 'react-scrollable-anchor';
import Application from './Application';
import About from './About';
import Design from './Design';
import Main from './Main';
import Menu from './Menu';
import ApplicationEntry from './ApplicationEntry';

class App extends Component {

  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
        <div className="App">
          <div className="content">
              <div className="header">
                <h1>Sohee Lim</h1>
              </div>
                <Menu />
              {this.state.appentry ? 
              <ApplicationEntry /> :
              <div className="page">
                <ScrollableAnchor id={'main'}>
                  <Main />
                </ScrollableAnchor>
                <ScrollableAnchor id={'about'}>
                  <About />
                </ScrollableAnchor>
                <ScrollableAnchor id={'application'}>
                  <Application handleAppEntry={this.handleAppEntry}/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'design'}>
                  <Design />
                </ScrollableAnchor>
              </div>}
              <div className="footer">
                <div>
                  <a href="mailto:limsohee1002@gmail.com">
                    <img src="./footer/email-01.png"/>
                  </a>
                  <a href="https://github.com/limsohee1002" target="_blank">
                    <img src="./footer/gitlogo-01.png"/>
                  </a>
                    <a href="http://www.linkedin.com/in/soheelim1002/" target="_blank">
                  <img src="./footer/linkedin-01.png"/>
                  </a>
                 </div>
                 <p>© Copyright 2018. All rights reserved.</p>
              </div>
          </div>
        </div>
    );
  }
}

export default App;