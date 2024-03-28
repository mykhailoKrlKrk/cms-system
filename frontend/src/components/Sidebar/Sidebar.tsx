import "./Sidebar.scss"
import PageLinks from "../Sidebar/page-links/PageLinks";

export default function SideBar(){
    return (
        <aside className="sidebar">
            <PageLinks />
        </aside>
    )   
}
