import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetch} from './actions'

class MyTable extends Component {
    componentWillMount() {
        this.props.fetch();
    }
    render() {
        return (<table>
            <thead>
                <tr><th>First Name</th><th>Last Name</th><th>Qualification</th></tr>
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

var mapStateToProperties = state => (
    {
        ...state
    }
);

var mapDispatchToProps = dispatch => ({
    fetch : () => dispatch(fetch)
});

export default connect(mapStateToProperties,mapDispatchToProps)(MyTable);