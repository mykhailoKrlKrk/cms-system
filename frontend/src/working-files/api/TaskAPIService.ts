import axios from "axios";
import { Task, TaskCreate } from "../types/Task";
import ITaskAPIService from "./interfaces/ITaskAPIService";
import BaseAPIService from "./BaseAPIService";

export default class TaskAPIService extends BaseAPIService<Task, TaskCreate> implements ITaskAPIService{
    constructor(apiUrl: string)
    {
        super(`${apiUrl}/tasks`);
    }
    
    async getAllAsync(filter: ((task: Task) => boolean) | null): Promise<Task[] | void> {
        let tasksToReturn: Task[];
        const promise = axios.get(this.url);
        const dataPromise = await promise
        .then(response => {
            console.log(response.data!.result);
            tasksToReturn = response.data!.result;
            if (filter){
                tasksToReturn = tasksToReturn!.filter((task: Task) => filter(task));
            }
            return tasksToReturn;
        })
        .catch(error => console.log(error))

        return dataPromise;
    }
}