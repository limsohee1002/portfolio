import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        
        <div className="skill">

          <div className="skilltitle">
            {/* <img className="decocircle" src="./IMG_0008.JPG"/> */}
            <h2>TECH STACKS</h2>
            {/* <img className="titleline" src="./titleline-01.png"/> */}
           <p></p>
          </div>

          <div className="skill-box">
            <div>
              {/* <img className="boxcolumn" src="./box-01.png"/> */}
              {/* <div className="background"></div> */}
              <h3>Languages</h3>
              <div className="lan">
                <img src="./logos/js.png"/>
                <img src="./logos/html.png"/>
                <img src="./logos/css.png"/>
                <img src="./logos/jquery.png"/>
              </div>
            </div>

            <div>
              {/* <div className="background"></div> */}
              <h3>Framework / Libraries</h3>
              <div className="frli">
                <img src="./logos/react.png"/>
                <img src="./logos/angular.png"/>
                <img src="./logos/node.png"/>
                <img src="./logos/express.png"/>
                <img src="./logos/sequelize.png"/>
                <img src="./logos/mongodb.png"/>
              </div>
            </div>

            <div>
            {/* <div className="background"></div> */}
              <h3>Others</h3>
              <div className="oth">
                <img src="./logos/photoshop.png"/>
                <img src="./logos/illustrator.png"/>
                <img src="./logos/indesign.png"/>
                <img src="./logos/autocad.png"/>
                <img src="./logos/sketchup.png"/>
              </div>
            </div>
          </div>  

        </div>
      </div>
    );
  }
}

export default About;
