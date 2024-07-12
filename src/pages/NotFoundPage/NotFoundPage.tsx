import "./NotFoundPage.scss";
import { rickPhrases } from "./NotFoundPage.constants";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const random = Math.floor(Math.random() * 10);

  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p className="message">{rickPhrases[random]}</p>
      <div className="link-btn">
        <Link className="link" to="/">Ok Ok, click here to go back!</Link>
      </div>
    </div>
  )
}
