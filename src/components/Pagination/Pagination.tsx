import { NavLink } from "react-router-dom";
import "./Pagination.scss";
import { PaginationProps } from "../../assets/types";

export default function Pagination (props: PaginationProps) {
  const {num, link, setCurrentPageNum} = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPageNum(num);
  }
  return (
    <NavLink 
      to={link} 
      className="page-link"
      onClick={handleClick}
    >{num}</NavLink>
  );
}
