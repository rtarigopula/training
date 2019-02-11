import StudentData from '../students.json';

export const load = {
    type: "LOAD",
    students: StudentData.students
};

export const txtChange = (txt) => {
    return { 
        type: "TXT_CHANGE",
        searchString: txt
    }
};
export const onSearch = (students, txt) => {
    return { 
        type: "ON_SEARCH",
        students: StudentData.students.filter(s => {
            return (s.firstName.indexOf(txt) > -1 || s.lastName.indexOf(txt) > -1 || s.qualification.indexOf(txt) > -1)
        })
    }
};