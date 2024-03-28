import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import "./CreateUpdateStudentModal.scss";
import { Student, StudentCreate } from "../../../working-files/types/Student";
import dayjs from "dayjs";
import { useContext } from "react";
import { OnStudentsChangeHandlersContext } from "../../../pages/StudentsPage/StudentsPage";
import { APIServiceContext } from "../../../app/Cms";
import validateNameSurname from "../../../working-files/functions/validateNameSurname";

type DeleteConfirmationModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    type: "create" | "update";
    prevStudentData: Student;
    index?: number;
}

export default function CreateUpdateStudentModal({ isModalOpen, setIsModalOpen, type,  prevStudentData }: DeleteConfirmationModalProps){
    const [form] = Form.useForm();
    const { onCreateNotifyHandler, onUpdateNotifyHandler } = useContext(OnStudentsChangeHandlersContext)!;
    const { studentAPIService } = useContext(APIServiceContext);
    
    function onFormSubmitHandler(event:React.MouseEvent<HTMLElement, MouseEvent>){
        event.preventDefault();
        form.validateFields()
            .then(async (values) => {
                const date = new Date(values.birthday);
                date.setDate(date.getDate() + 1);
                values.birthday = date.toISOString().split('T')[0];
                
                const student: Student ={
                    ...values,
                    status: prevStudentData.status
                };
                
                console.log(student);
                if (type === "create"){
                    form.resetFields();
                    const studentCreate: StudentCreate = {
                        ...student
                    };

                    await studentAPIService.createAsync(studentCreate, onCreateNotifyHandler);
                }
                else{
                    await studentAPIService.updateAsync(student.id, student, onUpdateNotifyHandler);
                }

                setIsModalOpen(false);
            })
            .catch(error => {
                let errorMessage = "";
                for(const key in error.response.data.errors) {
                    errorMessage = errorMessage.concat(`${error.response.data.errors[key]}\n`)
                }
                alert(errorMessage);
            })
    }

    return (
        <Modal
            title={type === "create" ? "Add student" : "Edit student"}
            open={isModalOpen}
            centered={true}
            closable={false}
            className="create-update-form-modal"
            footer={
                <>
                  <Button className={`modal-button ${type}-button`} onClick={(event) => 
                  {
                    onFormSubmitHandler(event);
                  }}>{type === "create" ? "Add" : "Edit"}</Button>
                  <Button className="modal-button" onClick={() => {
                        form.resetFields();
                        setIsModalOpen(false);
                    }
                  }>Cancel</Button>
                </>
            }
        > 
            <Form
                layout="horizontal"
                className="student-form" 
                form={form}
                >
                    <Form.Item initialValue={prevStudentData.id} name="id"  hidden={true}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="group"
                        label="Group"
                        initialValue={prevStudentData.group}
                    >
                        <Select className="task-create-form-input title-input">
                            <Select.Option value="PZ-21">PZ-21</Select.Option>
                            <Select.Option value="PZ-22">PZ-22</Select.Option>
                            <Select.Option value="PZ-23">PZ-23</Select.Option>
                            <Select.Option value="PZ-27">PZ-27</Select.Option>
                            <Select.Option value="AI-11">AI-11</Select.Option>
                            <Select.Option value="AI-12">AI-12</Select.Option>
                            <Select.Option value="KN-14">KN-14</Select.Option>
                            <Select.Option value="KN-88">KN-88</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="title-input-holder"
                        name="firstName"
                        label="First name"
                        initialValue={prevStudentData.firstName}
                        rules={
                            [
                                { 
                                    required: true, message: 'Please input first name!' 
                                },
                                ({getFieldValue}) =>({
                                    validator(_, value){
                                        if(!value){
                                            return Promise.resolve();
                                        }

                                        const validationResult = validateNameSurname(getFieldValue("firstName"), "Name");
                                        if(validationResult.status === "fail"){
                                            return Promise.reject(new Error(validationResult.errorMessage));
                                        }

                                        return Promise.resolve();
                                    }
                                })
                            ]
                        }
                    >
                        <Input minLength={2} maxLength={15}
                            className="task-create-form-input title-input"
                        />
                    </Form.Item>
                    <Form.Item
                        className="title-input-holder"
                        name="lastName"
                        label="Last name"
                        initialValue={prevStudentData.lastName}
                        rules={
                            [
                                { 
                                    required: true, message: 'Please input last name!' 
                                },
                                ({getFieldValue}) =>({
                                    validator(_, value){
                                        if(!value){
                                            return Promise.resolve();
                                        }

                                        const validationResult = validateNameSurname(getFieldValue("lastName"), "Surname");
                                        if(validationResult.status === "fail"){
                                            return Promise.reject(new Error(validationResult.errorMessage));
                                        }

                                        return Promise.resolve();
                                    }
                                })
                            ]
                        }
                    >
                        <Input minLength={2} maxLength={15}
                            className="task-create-form-input title-input"
                        />
                    </Form.Item>
                    <Form.Item
                        className="time-input-holder"
                        name="birthday" 
                        label="Birthday"
                        initialValue={prevStudentData.birthday ? dayjs(prevStudentData.birthday) : dayjs("07.07.2005")}
                        rules={
                            [
                                { 
                                    required: true, message: 'Please input the birth date!' 
                                },
                            ]
                        }>
                        <DatePicker format={"DD.MM.YYYY"}
                        minDate={dayjs("01.01.1945")}
                        />
                    </Form.Item>   
                    <Form.Item
                            className="type-input-holder"
                            name="gender" 
                            label="Gender"
                            initialValue={prevStudentData.gender}
                            >
                            <Select
                                className="task-create-form-input type-input"
                                options={[
                                    {value: "F", label: "F"},
                                    {value: "M", label: "M"}
                                ]}
                            />
                    </Form.Item>
                </Form>
            
        </Modal>
    )   
}