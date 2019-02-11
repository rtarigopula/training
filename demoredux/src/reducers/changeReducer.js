const initialSate = {
    students: [],
    searchString: ''
}

export default function(state = initialSate, action) {
    switch(action.type) {
        case 'TEXT_CHANGE':
            return {
                ...state,
                searchString: action.payload 
            }
        default:
            return state;
    }
}