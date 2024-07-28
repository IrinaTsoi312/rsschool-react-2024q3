import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Flyout.scss";
import { RootStateType } from "../../features/redux/redux.types";
import { unselectAll } from "../../features/redux/SelectedSlice";
import { Character, CSVCharacterData } from "../../assets/types";
import { characterInitialValue } from "./Flayout.constatnts";
import { BASE_URL } from "../CardCollection/CardCollection.constants";

export default function Flyout() {

  // const [character, setCharacter] = useState<CSVCharacterData>(characterInitialValue);
  
  const selectedCardsData = useSelector((state: RootStateType) => state.selectedCardsSliceReducer.selectedCardsData);

  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(unselectAll());
  };

  const convertToCSV = (chars: CSVCharacterData[]) => {
    const csvContent = [
      Object.keys(chars[0]).join(","),
      ...chars.map((char) => Object.values(char).join(",")),
    ].join("\n");
    return csvContent;
  };

  const download = () => {

    const data = selectedCardsData;
    const csvContent = convertToCSV(data);

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${data.length}_characters.csv`);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flayout-container">
      <p className="number-selected">
        Selected: {selectedCardsData.length} cards
      </p>
      <div className="buttons">
        <button className="btn-selected-control" onClick={removeAll}>
          Unselect all
        </button>
        <button className="btn-selected-control" onClick={download}>
          Download
        </button>
      </div>
    </div>
  );
}