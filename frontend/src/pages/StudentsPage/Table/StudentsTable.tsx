import { Checkbox } from "antd";
import { Student } from "../../../working-files/types/Student"
import "./StudentsTable.scss"
import OptionsButtons from "./options-buttons/OptionsButtons";
import convertToDateInTable from "../../../working-files/functions/convertToDateInTable";

type StudentsPageProps = {
    currentPage: number;
    studentsPerPage: number;
    students: Student[];
}

export default function StudentsTable({ students, currentPage, studentsPerPage }: StudentsPageProps){

    return (
        <table className="students-table">
            <thead>
                <tr>
                    <th className="checkbox-cell"><Checkbox></Checkbox></th>
                    <th>Group</th>
                    <th>Name</th>
                    <th className="gender-cell">Gender</th>
                    <th>Birthday</th>
                    <th className="status-cell">Status</th>
                    <th className="options-buttons-cell">Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    students && students.length > 0 && Array.isArray(students) ? students.map((student, index) => {
                        const statusCircleColorClass = student.status === "isActive" ? "green" : "";
                        return (
                                <tr key={student.id}>
                                <td><Checkbox></Checkbox></td>
                                <td>{student.group}</td>
                                <td>{student.firstName + " " + student.lastName}</td>
                                <td>{student.gender}</td>
                                <td>{`${convertToDateInTable(student.birthday)}`}</td>
                                <td><div className={`status-circle ${statusCircleColorClass}`}></div></td>
                                <td><OptionsButtons index={((currentPage - 1) * studentsPerPage) + index} student={student}/></td>
                            </tr>
                        );
                    }) : null
                }
            </tbody>
        </table>
    )
}