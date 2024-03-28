import { Button } from "antd"
import "./HeaderMenu.scss"
import { useState } from "react"
import HeaderMenuDropdown from "../../../modals/header-menu-dropdown-modal/HeaderMenuDropdown";

export default function HeaderMenu(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    window.addEventListener("resize", (event) => {
        event.preventDefault();
        if(window.innerWidth > 768){
            setIsModalOpen(false);
        }
    })

    return (
        <>
            <Button className="header-menu-holder" onClick={() => setIsModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            <HeaderMenuDropdown isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )   
}