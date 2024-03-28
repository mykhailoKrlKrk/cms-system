import { Button } from "antd";
import "./AddButton.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import CreateUpdateStudentModal from "../../../components/modals/create-update-student-modal/CreateUpdateStudentModal";
import { getDefaultStudent } from "../../../working-files/functions/GetStudents";

export default function AddButton(){
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    
    return (
        <>
            <CreateUpdateStudentModal 
                type="create"
                isModalOpen={isCreateModalOpen}
                setIsModalOpen={setIsCreateModalOpen}
                prevStudentData={getDefaultStudent()}/>
            <div className="button-holder">
                <Button className="add-button" onClick={() => setIsCreateModalOpen(true)}>
                   <FontAwesomeIcon icon={faPlus} className="fa-fw" />
                </Button>
            </div>
        </>
    )   
}