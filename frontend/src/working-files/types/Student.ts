export type Student = {
    id: number;
    group: string;
    firstName: string;
    lastName: string;
    gender: "M" | "F";
    birthday: string;
    status: "isActive" | "noActive";
}

export type StudentCreate = {
    group: string;
    firstName: string;
    lastName: string;
    gender: "M" | "F";
    birthday: string;
    status: "isActive" | "noActive";
}