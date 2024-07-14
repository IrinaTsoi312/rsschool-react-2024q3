import { Component } from "react";
import "./MainLayout.scss";
import CardCollection from "../../components/CardCollection/CardCollection";
import Header from "../../components/Header/Header";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <Header />
        <CardCollection />
      </div>
    );
  }
}
