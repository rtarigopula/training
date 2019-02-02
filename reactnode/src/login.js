import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div>
            <h1>{this.props.header}</h1>
            <p>{this.props.children}</p>
            <label>First Name</label><br/>
            <input type="text" placeholder="First name" /><br/>
            <label>Last Name</label><br/>
            <input type="text" placeholder="Last name" /><br/>
        </div>);
    }
}

export default Login;