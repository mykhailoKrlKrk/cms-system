import { useLocation } from "react-router-dom"
import "./PageLinks.scss"
import FRONTEND_ROUTES from "../../../working-files/constants/frontend-routes.constants";

export default function PageLinks(){
    const path = useLocation();
    const sidebarPageLinks = [
        {
            title: 'Dashboard',
            url: FRONTEND_ROUTES.PAGES.DASHBOARD
        },
        {
            title: 'Students',
            url: FRONTEND_ROUTES.PAGES.STUDENTS
        },
        {
            title: 'Tasks',
            url: FRONTEND_ROUTES.PAGES.TASKS
        },
    ]

    return (
        <ul className="page-links-list">
            {
                sidebarPageLinks.map(pageLink => {
                    let className = "";
                    if(path.pathname === pageLink.url){
                        className = "active-page";
                    }

                    return (
                        <li key={pageLink.title}>
                            <a href={pageLink.url} className={className}>{pageLink.title}</a>
                        </li>
                    )
                })
            }
        </ul>
    )   
}