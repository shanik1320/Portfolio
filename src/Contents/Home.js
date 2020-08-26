import React, { Component } from 'react';
//importing the picture as "profilepic".
// import profilepic from '../img/naafi_photo.png';
import ReactTypingEffect from 'react-typing-effect';



class XYZ extends Component {
    render() {
        return (
            {/* <img src={profilepic} className="profilepic"></img> */ }

            < ReactTypingEffect className = "typingeffect" text = { ['I am Abdul Wahid Naafi', 'I am a web developer']} speed = { 100} eraseDelay = { 700} />
)
    }
}
export default XYZ