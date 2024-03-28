import { Student, StudentCreate } from "../../types/Student";
import IBaseAPIService from "./IBaseApiService";

export default interface IStudentAPIService extends IBaseAPIService<Student, StudentCreate>{
    getAllAsync(): Promise<Student[] | void>;
}