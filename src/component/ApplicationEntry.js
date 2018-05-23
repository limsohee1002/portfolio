import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ApplicationEntry extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      mustr: {
        video: './project/mustr/mustr.mp4',
        pics: [ "./project/mustr/popcatlike.png", "./project/mustr/chat.png", "./project/mustr/kinfolk.png", 
               "./project/mustr/clickeditem.png", "./project/mustr/manageinv.png", "./project/mustr/trade.png", "./project/mustr/additem.png",  
               "./project/mustr/profile.png", "./project/mustr/search.png", "./project/mustr/login.png"],
        title: 'Mustr.',
        linklogo: [["https://muster-94d83.firebaseapp.com/", "./web.png"], ["https://github.com/limsohee1002/Muster", "./git.png"]],
        content: 'thisis application for sldfkjem aslfkje slkdfj slkfj slkfj sadlfkje flkajseakl',
        stacks:['Java Script', 'React', 'Firebase', 'Algolia', 'Dragula', 'Stripe', 'Webpack'],
      },
      brevity: {
        video: './project/brevity/brevity.mp4',
        pics: ["./project/brevity/gamelist.png", "./project/brevity/gameplay.png", "./project/brevity/leaderboard.png", "./project/brevity/profile.png", 
               "./project/brevity/profilepub.png", "./project/brevity/login.png", "./project/brevity/phonegamelist.png", "./project/brevity/phonegameplay.png", 
               "./project/brevity/phoneprofile.png", "./project/brevity/phoneprofileee.png", "./project/brevity/phonelogin.png"],
        title: 'Brevity',
        linklogo: [["http://hrbrevity.herokuapp.com/", "./web.png"], ["https://github.com/limsohee1002/brevity", "./git.png"]],
        content: 'thisis application for sldfkjem aslfkje slkdfj slkfj slkfj sadlfkje flkajseakl',
        stacks:['Java Script', 'React', 'React Router', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Mocha', 'Bcrypt', 'Ace Editor', 'Countdown Clock'],
      },
      bespin: {
        video: './project/bespin/bespin.mp4',
        pics: ["./project/bespin/profilemain.png", "./project/bespin/mainhover.png", "./project/bespin/addboard.png", "./project/bespin/addphoto.png", 
               "./project/bespin/selectboard.png", "./project/bespin/boardselect.png", "./project/bespin/login.png", "./project/bespin/phonemain.png", 
               "./project/bespin/phonepromain.png", "./project/bespin/phonelogin.png"],
        title: 'Bespinterest',
        linklogo: [["https://github.com/limsohee1002/bestpinterest", "./git.png"]],
        content: 'thisis application for sldfkjem aslfkje slkdfj slkfj slkfj sadlfkje flkajseakl',
        stacks:['Java Script', 'React', 'Axios', 'Node.js', 'Express', 'PstgreSQL','Sequelize', 'Webpack'],
      }
    }
  }

  render() {console.log(this.props.click)
    return(this.props.click ?
            <div className="application-entry">
              <div className="application-entry-content">
                <div className="entry-close">
                  <div>
                    <img  className="popup-close"
                      onClick={() => this.props.handleClose()} src="./close-01.png"/>
                  </div>
                </div>
                <div className="video">
                  <div className="videoWrapper">
                    <iframe src={this.state[this.props.click].video} />
                  </div>
                </div>
                <Carousel emulateTouch={true} showStatus={false} width={'80%'}>
                {this.state[this.props.click].pics.map((pic) => {
                  return (
                    <div>
                      <img src={pic} />
                    </div>
                  )
                })}
                </Carousel>
                <div className="text-content-box">
                  <div className="entry-text">
                  <div className="entry-title">
                    <h3>{this.state[this.props.click].title}</h3>
                    <div className="icon">
                      {this.state[this.props.click].linklogo.map((logo) => {
                         return(
                          <a href={logo[0]} target="_blank"><img src={logo[1]}/></a>
                         )
                      })}
                    </div>
                  </div>
                  <p>{this.state[this.props.click].content}</p>
                  </div>
                </div>
                <div>
                  <div className="entry-stack">
                  <h3>Tech Stack</h3>
                    <div className="techstack-group">
                      {this.state[this.props.click].stacks.map((stack) => {
                        return (
                          <div className="techstacks">
                            <p>{stack}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            null
          );
  }
}

export default ApplicationEntry;
