import "./Pagination.scss";
import { PaginationProps } from "../../assets/types";
import Link from "next/link";

export default function Pagination (props: PaginationProps) {
  const {num, link, setCurrentPageNum} = props;

  const handleClick = () => {
    setCurrentPageNum(num);
  }
  return (
    <Link 
      href={link} 
      className="page-link"
      onClick={handleClick}
    >{num}</Link>
  );
}
