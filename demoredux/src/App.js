import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentData from './students.json';
import Table from './table.js';
import Search from './search.js';

class DataTable extends Component {
     render () {
        return <div>
                <div className="App">
                    <header className="App-header">
                        <Search />
                        <Table />
                    </header> 
                </div>
            </div>;
    }
}

export default DataTable;

