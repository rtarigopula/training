import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './data-table';
import {Route, Switch} from 'react-router-dom';
import MyTable from './table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Lifecycle header="Welcom to React">
            This is to Demo props children.
          </Lifecycle> */}
          <MyTable />
        </header>
      </div>
    );
  }
}

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/r1' exact component={D1} />
          <Route path='/r2' component={D2} />
          <Route path='/r2' component={D6} />
          <Route path='/r2' component={D7} />
          <Route path='/r3' component={D3} />
          <Route path='/r4' component={D4} />
          <Route path='/r5' component={D5} />
          <Route path='/r1/r6' component={D8} />
          <Route path='*' component={D9} />
          </Switch>
      </div>
    );
  }
}

var Page = props =><div>
    <h1>{props.desitantion}</h1>
    Welcome to destination {props.desitantion}
</div>;

var D1 = () => <Page desitantion="D1" />
var D2 = () => <Page desitantion="D2" />
var D3 = () => <Page desitantion="D3" />
var D4 = () => <Page desitantion="D4" />
var D5 = () => <Page desitantion="D5" />
var D6 = () => <Page desitantion="D6" />
var D7 = () => <Page desitantion="D7" />
var D8 = () => <Page desitantion="D8" />;
var D9 = () => <Page desitantion="D9" />

//export default App;
export default App;
