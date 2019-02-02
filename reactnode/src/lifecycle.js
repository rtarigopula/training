import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        console.log("=====> Inside Constructor.");
        super(props);
        this.state = {name: "Sai"};
    }

    componentWillMount() {
        console.log("=====> Inside componentWillMount.");
    }

    componentDidMount() {
        console.log("=====> Inside componentDidMount.");
        this.setState({name: 'Rajesh'});
    }

    shouldComponentUpdate() {
        console.log("=====> Inside shouldComponentUpdate.");
        return true;
    }

    render () {
        console.log("=====> Inside render.");
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