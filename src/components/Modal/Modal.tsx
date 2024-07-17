import "./Modal.scss";
import { MESSAGES } from "../../features/ErrorBoundary/ErrorBoundary.constants";

export default function Modal() {
  return (
    <div>
      <h1 className="modal-heading">{MESSAGES}</h1>
      <button className="refresh" onClick={() => window.location.reload()} >
        To refresh app' state and return, click on this button
      </button>
    </div>
  );
}
