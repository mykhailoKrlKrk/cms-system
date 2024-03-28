import "./HeaderUser.scss"
import UserDropdown from "./user-dropdown/UserDropdown"
import userImage from "./../../../../../public/cms-icon.png"
export default function HeaderUser(){
    return (
        <a className="user-holder">
             <img src={userImage} 
             alt="Profile picture of James Bond" 
             className="user-avatar"
             />
            <span className="user-name">Doggie Bond</span>
            <UserDropdown />
        </a>
    )   
}