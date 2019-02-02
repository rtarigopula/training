import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './data-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Lifecycle header="Welcom to React">
            This is to Demo props children.
          </Lifecycle> */}
          <DataTable />
        </header>
      </div>
    );
  }
}

export default App;
