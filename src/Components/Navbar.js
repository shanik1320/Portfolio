import React, { Component } from 'react';
import Navitem from './Navitem';
// We'll code Navitem.js later for now let's focus on Navbar.js
// “Navitem” is the sub-component.
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemId': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" ></Navitem>
                    <Navitem item="About" tolink="/about" ></Navitem>
                    <Navitem item="Education" tolink="/education"></Navitem>
                    <Navitem item="Skills" tolink="/skills"></Navitem>
                    <Navitem item="Contact" tolink="/contact"></Navitem>
                </ul>
            </nav>
        )
    }
}

export default Navbar