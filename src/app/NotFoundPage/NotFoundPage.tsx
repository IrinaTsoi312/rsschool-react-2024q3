"use client";

import "./NotFoundPage.scss";
import { rickPhrases } from "./NotFoundPage.constants";
import Link from "next/link";

export default function NotFoundPage() {
  const random = Math.floor(Math.random() * 10);

  return (
    <div className="not-found">
      <h1 className="heading">404 Not Found</h1>
      <p className="message">{rickPhrases[random]}</p>
      <div className="link-btn">
        <Link className="link" href="/">
          <span>Ok Ok, click here to go back!</span>
        </Link>
        <span className="img"></span>
      </div>
    </div>
  );
}
