import { Component } from "react";
import "./Modal.scss";
import { MESSAGES } from "../../features/ErrorBoundary/ErrorBoundary.constants";

export default class Modal extends Component {
  refreshWindow() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h1 className="modal-heading">{MESSAGES}</h1>
        <button className="refresh" onClick={this.refreshWindow}>
          To return, click on this button
        </button>
      </div>
    );
  }
}
