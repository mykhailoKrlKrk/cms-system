import "./NotificationDropdown.scss"
import DropdowmItem from "./dropdown-item/DropdownItem"

export default function NotificationDropdown(){
    const notifications = [
        {
            studName: "sssss",
            lastMessage: "asdas asd asdadad",
        },
        {
            studName: "qwe",
            lastMessage: "asdas asd asdadad   a sdcas",
        },
        {
            studName: "sssssdqdqwdqwdqd",
            lastMessage: "asdas asd asdadad sdcasdcs asd casd a c",
        },
    ] 

    return (
        <div className="notification-dropdown">
            <ul>
                {notifications.map((notification, index) => {
                    return (
                        <DropdowmItem key={index} studName={notification.studName} lastMessage={notification.lastMessage}/>
                    )
                })}
            </ul>
        </div>
    )   
}