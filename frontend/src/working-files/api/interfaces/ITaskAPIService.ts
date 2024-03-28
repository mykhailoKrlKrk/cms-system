import { Task, TaskCreate } from "../../types/Task";
import IBaseAPIService from "./IBaseApiService";

export default interface ITaskAPIService extends IBaseAPIService<Task, TaskCreate>{
    getAllAsync(filter: ((student: Task) => boolean) | null): Promise<Task[] | void>;
}