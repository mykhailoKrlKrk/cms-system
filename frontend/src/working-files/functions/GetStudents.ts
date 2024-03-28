import { Student } from "../types/Student";

export function getStudents(): Student[]{
    return [
        {
            id: 1,
            group: "AI-11",
            firstName: "James",
            lastName: "Bond",
            gender: "M",
            birthday: "11.11.1111",
            status: "isActive",
        },
        {
            id: 2,
            group: "PZ-27",
            firstName: "Ann",
            lastName: "Bond",
            gender: "F",
            birthday: "11.11.1111",
            status: "noActive",
        },
        {
            id: 2,
            group: "PZ-27",
            firstName: "Ann",
            lastName: "Bond",
            gender: "F",
            birthday: "11.11.1111",
            status: "isActive",
        }
    ]
}

export function getDefaultStudent(): Student
{
    return {
        id: 0,
        group: "PZ-21",
        firstName: "",
        lastName: "",
        gender: "M",
        birthday: "",
        status: "isActive",
    }
}
