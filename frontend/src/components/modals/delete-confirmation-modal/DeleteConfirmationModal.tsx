import { Button, Modal } from "antd";
import "./DeleteConfirmationModal.scss";
import { useContext } from "react";
import { OnStudentsChangeHandlersContext } from "../../../pages/StudentsPage/StudentsPage";
import { APIServiceContext } from "../../../app/Cms";

type DeleteConfirmationModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    studentName: string;
}

export default function DeleteConfirmationModal({ id, isModalOpen, setIsModalOpen, studentName }: DeleteConfirmationModalProps){
    const { onDeleteNotifyHandler } = useContext(OnStudentsChangeHandlersContext)!;
    const { studentAPIService } = useContext(APIServiceContext);

    function OnDeleteHandler(){
        studentAPIService.removeAsync(id, onDeleteNotifyHandler);
        setIsModalOpen(false);
    }

    return (
        <Modal 
            title="Warning"
            open={isModalOpen} 
            onOk={() => {}} 
            onCancel={() => setIsModalOpen(false)}
            centered={true}
            className="delete-student-modal"
            footer={() => (
                <>
                  <Button className="delete-modal-button delete-button" onClick={() => OnDeleteHandler()}>Delete</Button>
                  <Button className="delete-modal-button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </>
            )}
        >
            <div>Are you sure you want to delete {studentName}?</div>
           
        </Modal>
    )   
}