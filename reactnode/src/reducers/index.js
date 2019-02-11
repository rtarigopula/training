
export default function(state, action) {
    switch(action.type) {
        case 'LOAD':
            console.log('Triggered Reducer LOAD');
            return {
                ...state,
                students: action.students
            }
        default:
            return state;
    }
}