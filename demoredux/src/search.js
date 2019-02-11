import React, {Component} from 'react';
import {txtChange, onSearch} from './actions';
import {connect} from 'react-redux';

class MySearch extends Component {
    render() {
        return <div>
                <input id="searchText" onChange={e => { this.props.txtChange(e.target.value)}} type="text" size='60' placeholder="Search Text"/>
                <button onClick={ e => {this.props.onSearch(this.props.students,this.props.searchString)}}>Search</button>
        </div>;
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    txtChange: (txt) => dispatch(txtChange(txt)),
    onSearch: (students, txt) => dispatch(onSearch(students, txt))
});

export default connect(mapStateToProps,mapDispatchToProps)(MySearch);