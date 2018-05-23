import React, { Component } from 'react';
import { goToTop } from 'react-scrollable-anchor';

class Menu extends Component {
  
  constructor() {
    super()
    this.state = {
      about: false,
      application: false,
      design: false,
    }
  }
  
  render() {
    return (
      <nav className="menu">
        <ul className="menu-list">
          <a href="#" onClick={() => goToTop()}>
            <li>
              <img className="menulogo" src="./menulogo.png" />
            </li>
          </a>
          <a href="#about">
            <li className="menuabout">
              <h3>about</h3>
            </li>
          </a>
          <a href="#application">
            <li className="menuapp">
              <h3>project</h3>
            </li>
          </a>
          <a href="#design">
          <li className="menudesign">
            <h3>design</h3>
          </li>
          </a>
        </ul>
	    </nav>
    );
  }
}

export default Menu;
