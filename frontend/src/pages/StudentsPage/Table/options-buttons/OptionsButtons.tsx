import { Button } from "antd"
import "./OptionsButtons.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import DeleteConfirmationModal from "../../../../components/modals/delete-confirmation-modal/DeleteConfirmationModal";
import { Student } from "../../../../working-files/types/Student";
import CreateUpdateStudentModal from "../../../../components/modals/create-update-student-modal/CreateUpdateStudentModal";
import { useState } from "react";

type OptionsButtonsProps = {
    student: Student;
    index: number;
}

export default function OptionsButtons({ student }: OptionsButtonsProps){
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

    
    return (
        <div className="options-buttons-holder">
            <DeleteConfirmationModal 
                isModalOpen={isDeleteModalOpen} 
                setIsModalOpen={setIsDeleteModalOpen} 
                id={student.id}
                studentName={student.firstName + " " + student.lastName}/>
            <CreateUpdateStudentModal 
                type="update"
                isModalOpen={isUpdateModalOpen}
                setIsModalOpen={setIsUpdateModalOpen}
                prevStudentData={student}/>
            <Button className="options-button" onClick={() => setIsUpdateModalOpen(true)}>
                <FontAwesomeIcon className="editButton" icon={faPencilAlt} />
            </Button>
            <Button className="options-button" onClick={() => setIsDeleteModalOpen(true)}>
                <FontAwesomeIcon className="deleteButton" icon={faTimes} />
            </Button>
        </div>
    )   
}