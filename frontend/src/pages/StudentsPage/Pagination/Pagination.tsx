import { Button } from "antd";
import "./Pagination.scss"

type PaginationProps = {
    studentsPerPage: number;
    studentsCount: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ studentsCount, currentPage, setCurrentPage, studentsPerPage }: PaginationProps){
    const pages = [];
    for(let i = 1; i <= Math.ceil(studentsCount / studentsPerPage); i++ ){
        pages.push(i);
    }
    return (
        <div className="pagination-row">
            <div className="pagination-buttons-holder">
                {pages.map((page) => {
                    const className = page === currentPage ?
                        "pagination-button focused-button" : "pagination-button";
                    return (
                        <Button key={page.toString()} className={className} onClick={() =>
                            setCurrentPage(page)}>{page}</Button>
                    )
                })}
            </div>
        </div>
    )   
}