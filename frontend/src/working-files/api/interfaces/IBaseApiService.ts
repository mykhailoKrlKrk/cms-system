
export default interface IBaseAPIService<T, TCreate>{
    getAsync(id: number): Promise<T | void>;
    createAsync(student: TCreate, onCreateNotifyHandler: () => void): void;
    updateAsync(id: number, newStudent: T, onUpdteNotifyHandler: () => void): void;
    removeAsync(id: number, onDeleteNotifyHandler: () => void): void;
}