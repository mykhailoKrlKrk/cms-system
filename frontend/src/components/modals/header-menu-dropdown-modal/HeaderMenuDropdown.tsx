import { Modal } from "antd"
import "./HeaderMenuDropdown.scss"
import PageLinks from "../../Sidebar/page-links/PageLinks";
import HeaderNotification from "../../Header /header-components/header-notification/HeaderNotification";
import HeaderUser from "../../Header /header-components/header-user/HeaderUser";

type HeaderMenuDropdownProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderMenuDropdown({ isModalOpen, setIsModalOpen }: HeaderMenuDropdownProps){
    return (
        <Modal 
            open={isModalOpen} 
            className="header-menu-dropdown-modal"
            footer={<></>}
            onCancel={() => setIsModalOpen(false)}
        >
            <div className="notification-user-holder">
                <HeaderNotification />
                <HeaderUser />
            </div>
            <PageLinks />

        </Modal>
    )   
}