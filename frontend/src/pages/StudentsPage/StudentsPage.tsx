import { useContext, useEffect, useState } from "react";
import { Student } from "../../working-files/types/Student";
import "./StudentsPage.scss";
import AddButton from "./add-button/AddButton";
import StudentsTable from "./Table/StudentsTable";
import Pagination from "./Pagination/Pagination";
import React from "react";
import { APIServiceContext } from "../../app/Cms";

type StudentsChangeHandlers = {
    onUpdateNotifyHandler: () => void;
    onCreateNotifyHandler: () => void;
    onDeleteNotifyHandler: () => void;
    onPageChangeHandler: () => void;
}


export const OnStudentsChangeHandlersContext = React.createContext<StudentsChangeHandlers>({
    onCreateNotifyHandler: () => {},
    onDeleteNotifyHandler: () => {},
    onUpdateNotifyHandler: () => {},
    onPageChangeHandler: () => {},
});

export default function StudentsPage(){
    // Pagination for students in table.
    const [currentPage, setCurrentPage] = useState<number>(1);
    const studentsPerPage = 5;
    const { studentAPIService } = useContext(APIServiceContext);
    const [students, setStudents] = useState<Student[]>([]);
    const [isChanged, setIsChanged] = useState(false);
    const endIndex = currentPage * studentsPerPage;
    const startIndex = endIndex - studentsPerPage;
    
    useEffect(() => {
        // Executes only when isChanged variable changes.
        studentAPIService.getAllAsync()
            .then(response => {
                if(response){
                    setStudents(response);
                    if(response.length <= studentsPerPage * (currentPage - 1)){
                        setCurrentPage(currentPage - 1);
                    }
                }
            })
        // Reseting isChange variable   
        setIsChanged(false);
    }, [isChanged])
    
    // Implementation of handlers of tasks array change.
    function updateNotificationHandler(){
        setIsChanged(true);
    }

    function createNotificationHandler(){
        setIsChanged(true);
    }

    function deleteNotificationHandler(){
        setIsChanged(true);
    }

    function pageChangeHandler(){
        setIsChanged(true);
    }
    
    // Creating variable that will store handlers on tasks array change,
    const studentsChangeHandlers: StudentsChangeHandlers = {
        onCreateNotifyHandler: createNotificationHandler,
        onDeleteNotifyHandler: deleteNotificationHandler,
        onUpdateNotifyHandler: updateNotificationHandler,
        onPageChangeHandler: pageChangeHandler,
    };

    return (
        <OnStudentsChangeHandlersContext.Provider value={studentsChangeHandlers}>
            <div className="page sudent-page">
              <div className="h1-container">
                <h1 className="students-h1">Students</h1>
                <AddButton />
              </div>
                <StudentsTable students={students.slice(startIndex, endIndex)} studentsPerPage={studentsPerPage} currentPage={currentPage}/>
                {
                    students.length > 5 && 
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} studentsCount={students.length} studentsPerPage={studentsPerPage}/>
                }
            </div>
        </OnStudentsChangeHandlersContext.Provider>
    )   
}