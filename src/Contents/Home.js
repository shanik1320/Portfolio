import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import profilepic from '../img/naafi_photo.png';
import Social from '../Components/Social'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                {/* <img src={profilepic} className="profilepic"></img> */}
                <ReactTypingEffect className="typingeffect" text={['I am Shanik Hernandez', 'I am a web developer']} speed={100} eraseDelay={700} />

                <Social/>
            </div>
        )
    }
}
export default Home