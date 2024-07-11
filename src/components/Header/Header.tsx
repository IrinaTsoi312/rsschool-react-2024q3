import { Component } from "react";
import "./Header.scss";
import { HeaderProps } from "../../assets/types";

export default class Header extends Component<object, HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    return (
      <header className="header">
        <h1 className="logo">Rick and Morty</h1>
      </header>
    );
  }
}
