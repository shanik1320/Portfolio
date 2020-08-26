import React, { Component } from 'react';
import Widecard from '../components/Widecard';


class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Web Developer certificate" where="University of Central Florid" from="March 2020" to="May 2020" />
                <Widecard title="High school diploma" where="Oak Ridge High" from="2007" to="2011" />
            </div>
        )
    }
}
export default Education