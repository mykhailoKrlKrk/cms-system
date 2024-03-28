import FRONTEND_ROUTES from "../../../working-files/constants/frontend-routes.constants"
import "./MainHeader.scss"
import HeaderMenu from "./header-menu/HeaderMenu"
import HeaderNotification from "../header-components/header-notification/HeaderNotification"
import HeaderUser from "../header-components/header-user/HeaderUser"
import logoImage from "../../../assets/images/Logo white transparent.png"

export default function MainHeader(){
    return (
        <header className="main-header">

            <a href={FRONTEND_ROUTES.PAGES.STUDENTS} className="main-header-logo">
              <img src={logoImage} alt="Logo image" className="cms-logo-image" />
            </a>
            
            <div className="header-content-holder">
                <div className="notification-user-holder">
                    <HeaderNotification />
                    <HeaderUser />
                </div>
                <HeaderMenu />
            </div>
        </header>
    )   
}