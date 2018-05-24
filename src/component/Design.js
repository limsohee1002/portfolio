import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Design extends Component {
  render() {
    return (
      <div>
        <div className="design-title">
          {/* <img className="decocircle" src="IMG_0018.png"/> */}
          <h2>Design</h2>
          {/* <img className="titleline" src="./titleline-01.png"/> */}
        </div>
        <div className="design-content">
        <Carousel emulateTouch>
          <div>
            <img src="./design/backmain-big.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/cyber.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/thanks.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/main-big-(1).gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/hall.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/main-big.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/main-big-0002.png" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/bottomsales-2.gif" />
            {/* <p className="legend">banner</p> */}
          </div>
          <div>
            <img src="./design/portmain-1.png" />
            {/* <p className="legend">book cover art</p> */}
          </div>
          <div className="size">
            <img src="./design/women.png" />
            {/* <p className="legend">oil painting</p> */}
          </div>
          <div className="size">
            <img src="./design/DSCF0429.png" />
            {/* <p className="legend">acrylic painting</p> */}
          </div>
          <div className="size">
            <img src="./design/hill.png" />
            {/* <p className="legend">oil painting</p> */}
          </div>
        </Carousel>
        </div>
      </div>
    );
  }
}

export default Design;
