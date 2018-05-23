import React, { Component } from 'react';
import ApplicationEntry from './ApplicationEntry.js'

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mustr: false,
      brevity: false,
      bespin: false,
      click: false,
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({click: false})
  }

  render() {
    return (
      <div className="application">
        <div className="app-title">
          <img className="decocircle" src="IMG_0011.JPG"/>
          <h2>PROJECTS</h2>
          <img className="titleline" src="./titleline-01.png"/>
        </div>
        <div>
        <div className="app-content">
          <div className={this.state.mustr ? "application-mustrhover" : "application-mustr"}
               onClick={() => this.setState({click: 'mustr'})}
               onMouseEnter = {() => this.setState({mustr: true})}
               onMouseLeave = {() => this.setState({mustr: false})}>
            <img src={this.state.mustr ? "./project/mustr/mustr-demo.gif" : "./project/mustr/popcatlike.png"}/>
            <div className="app-ex">
              <h4>Mustr.</h4>
              <p>Social-oriented inventory tracking application</p>
              <div className="stack">
                <div>Javascript</div>
                <div>React</div>
                <div>Firebase</div>
                <div>Algolia</div>
                <div>React Router</div>
                <div>Dragula</div>
                <div>Stripe</div>
              </div>
            </div>
          </div>
          <div className={this.state.brevity ? "application-brevityhover" : "application-brevity"}
               onClick={() => this.setState({click: 'brevity'})}
               onMouseEnter = {() => this.setState({brevity: true})}
               onMouseLeave = {() => this.setState({brevity: false})}>
            <img src={this.state.brevity ? "./project/brevity/brevity-demo.gif" : "./project/brevity/gameplay.png"}/>
            <div className="app-ex">
              <h4>Brevity</h4>
              <p>Coding challenge platform based on speed and accuracy</p>
              <div className="stack">
                <div>Javascript</div>
                <div>React</div>
                <div>React Router</div>
                <div>MongoDB</div>
                <div>Axios</div>
                <div>Express</div>
                <div>Node.js</div>
                <div>Ace Editor</div>
                <div>Bycript</div>
              </div>
            </div>
          </div>
          <div className={this.state.bespin ? "application-bespinhover" : "application-bespin"}
               onClick={() => this.setState({click: 'bespin'})}
               onMouseEnter = {() => this.setState({bespin: true})}
               onMouseLeave = {() => this.setState({bespin: false})}>
            <img src={this.state.bespin ? "./project/bespin/bespin-demo.gif" : "./project/bespin/main.png"}/>
            <div className="app-ex">
              <h4>Bspinterst</h4>
              <p>Application for sharing and managing images on a personal board</p>
              <div className="stack">
                <div>Javascript</div>
                <div>React</div>
                <div>PostgreSQL</div>
                <div>Axios</div>
                <div>Express</div>
                <div>Node.js</div>
                <div>Sequelize</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <ApplicationEntry handleClose={this.handleClose} click={this.state.click} />
      </div>
    );
  }
}

export default Application;
