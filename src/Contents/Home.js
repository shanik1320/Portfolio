import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import profilepic from '../img/naafi_photo.png';



class Home extends Component {
render() {
return (
<div className="condiv home">
{/* <img src={profilepic} className="profilepic"></img> */}
<ReactTypingEffect className="typingeffect" text={['I am Abdul Wahid Naafi','I am a web developer']} speed={100} eraseDelay={700}/>
</div>
)
}
}
export default Home