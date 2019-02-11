const initialSate = {
    students: [],
    searchString: ''
}

export default function(state = initialSate, action) {
    switch(action.type) {
        case 'LOAD':
            console.log('Load from Reducer');
            return {
                ...state,
                students: action.students
            }
        case 'TXT_CHANGE':
            console.log('Change Text Reducer');
            return {
                ...state,
                searchString: action.searchString
            }
        case 'ON_SEARCH':
            console.log('On Search Reducer');
            return {
                ...state,
                students: action.students
            }
        default:
            return state;
    }
}