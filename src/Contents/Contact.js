import React, { Component } from 'react';
import Social from '../Components/Social';


class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   shanikhernandez93@outlook.com</h3>
                {/* <h3>Instagram   :   @iam_naafi</h3> */}
                <Social />
            </div>
        )
    }
}
export default Contact;