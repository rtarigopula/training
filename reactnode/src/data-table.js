import React, { Component } from 'react';
import StudentData from './students.json';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            searchText: '',
            students: StudentData.students,
            students_clone: StudentData.students
        }
    }

    onSearch(txt) {

        filteredResults = this.state.students;
        if (txt != '') {
            var filteredResults = this.state.students_clone.filter(s => {
                return (s.firstName.indexOf(txt) > -1 || s.lastName.indexOf(txt) > -1 || s.qualification.indexOf(txt) > -1)
            })
        }
        this.setState({
            searchText: txt,
            students: filteredResults,
            students_clone: this.state.students_clone
        })
    }

    render () {
        return <div>
            <Search click={this.onSearch}/>
            <Grid students={this.state.students}/>
        </div>;
    }
}

export default DataTable;

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr><th>First Name</th> <th>Last Name</th> <th>Qualification</th> </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student,i) => <tr key={i}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.qualification}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {searchTxt:''};
    }

    onClick(e) {
        this.props.click(this.state.searchTxt);
    }

    onChange(e) {
        this.setState({searchTxt: e.target.value});
    }

    render() {
        return (
            <div>
                <input id="searchText" onChange={this.onChange} type="text" size='60' placeholder="Search Text"/>
                <button onClick={this.onClick}>Search</button>
            </div>
        );
    }
}

