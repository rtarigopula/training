import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div>
            <label>First Name</label>
            <input type="text" placeholder="First name" />
            <label>Last Name</label>
            <input type="text" placeholder="Last name" />
        </div>);
    }
}

export default Login;