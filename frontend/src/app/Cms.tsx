import "./Cms.scss";
import MainHeader from "../components/Header /main-header/MainHeader";
import { Outlet } from "react-router";
import SideBar from "../components/Sidebar/Sidebar";
import ITaskAPIService from "../working-files/api/interfaces/ITaskAPIService";
import IStudentAPIService from "../working-files/api/interfaces/IStudentAPIService";
import StudentAPIService from "../working-files/api/StudentAPIService";
import TaskAPIService from "../working-files/api/TaskAPIService";
import React from "react";

type APIServices = {
  taskAPIService: ITaskAPIService;
  studentAPIService: IStudentAPIService;
};

export const APIServiceContext = React.createContext<APIServices>({
  taskAPIService: new TaskAPIService(""),
  studentAPIService: new StudentAPIService(""),
});

function Cms() {
  const apiServices: APIServices = {
    taskAPIService: new TaskAPIService(import.meta.env.VITE_API_URL),
    studentAPIService: new StudentAPIService(import.meta.env.VITE_API_URL),
  };

  return (
    <APIServiceContext.Provider value={apiServices}>
      <div>
        <MainHeader />
        <div className="sidebar-main-holder">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </APIServiceContext.Provider>
  );
}

export default Cms;
