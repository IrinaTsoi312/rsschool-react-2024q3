import { useDispatch, useSelector } from "react-redux";
import "./Flyout.scss";
import { RootStateType } from "../../features/redux/redux.types";
import { unselectAll } from "../../features/redux/SelectedSlice";

export default function Flyout() {
  const selectedCardsData = useSelector((state: RootStateType) => {
    return state.selectedCardsSliceReducer.selectedCardsData;
  });

  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(unselectAll());
  };

  return (
    <div className="flayout-container">
      <p className="number-selected">
        Selected: {selectedCardsData.length} cards
      </p>
      <div className="buttons">
        <button
          className="btn-selected-control"
          onClick={removeAll}
        >Unselect all</button>
        <button className="btn-selected-control">Download</button>
      </div>
    </div>
  )
}
