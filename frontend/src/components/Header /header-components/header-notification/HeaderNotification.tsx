import "./HeaderNotification.scss";
import NotificationDropdown from "./notification-dropdown/NotificationDropdown";
import bellPicture from "./../../../../assets/images/Сповіщення дзвінка дзвіночок.png";

export default function HeaderNotification() {
  return (
    <a className="notification-holder">
      <img
        src={bellPicture}
        alt="Notification Bell"
        className="notification-icon-img"
      />
      <div className="red-bliking-dot"></div>
      <NotificationDropdown />
    </a>
  );
}
