import axios from "axios";
import IBaseAPIService from "./interfaces/IBaseApiService";

export default class BaseAPIService<T, TCreate> implements IBaseAPIService<T,TCreate>{
    protected url: string;
    constructor(apiUrl: string){
        this.url = apiUrl;
    }
    
    async getAsync(id: number): Promise<T | void> {
        let taskToReturn: T;
        const promise = axios.get(`${this.url}/${id}`);
        const dataPromise = promise
            .then(response => {
                taskToReturn = response.data!.result;
                return taskToReturn;
            })
            .catch(error => console.log(error))
        
        return dataPromise;
    }
    
    async createAsync(task: TCreate, onCreateNotifyHandler: () => void): Promise<void> {
        console.log(task);
        await axios.post(this.url, task)
            .then(res => {
                res;
                onCreateNotifyHandler();
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    async updateAsync(id: number, newTask: T, onUpdteNotifyHandler: () => void): Promise<void> {
        console.log(id, newTask);
        await axios.put(`${this.url}/${id}`, newTask)
            .then(res => {
                res;
                onUpdteNotifyHandler();
            });
    }

    async removeAsync(id: number, onDeleteNotifyHandler: () => void): Promise<void> {
       await axios.delete(`${this.url}/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        onDeleteNotifyHandler();
      })
      .catch(error =>{
        console.log(error);
      })
    }

}