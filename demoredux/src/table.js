import React, {Component} from 'react';
import {load} from './actions';
import {connect} from 'react-redux';

class MyTable extends Component {
    componentWillMount() {
        this.props.load();
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
                    </tr>)}
                </tbody>
            </table>);
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load)
});

export default connect(mapStateToProps,mapDispatchToProps)(MyTable);