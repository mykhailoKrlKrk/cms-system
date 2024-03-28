import axios from "axios";
import { Student, StudentCreate } from "../types/Student";
import BaseAPIService from "./BaseAPIService";
import IStudentAPIService from "./interfaces/IStudentAPIService";

export default class StudentAPIService extends BaseAPIService<Student, StudentCreate> implements IStudentAPIService{
    constructor(apiUrl: string)
    {
        super(`${apiUrl}/students`);
    }
    
    async getAllAsync(): Promise<Student[] | void> {
        let studentsToReturn: Student[];
        const promise = axios.get(`${this.url}`);
        const dataPromise = await promise
        .then(response => {
            studentsToReturn = response.data;
            return studentsToReturn;
        })
        .catch(error => console.log(error))

        return dataPromise;
    }
}