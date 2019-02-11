import StudentData from '../students.json';

export const fetch = {
    type: "LOAD",
    students: StudentData.students
};