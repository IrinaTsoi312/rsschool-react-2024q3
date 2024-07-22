import { useDispatch, useSelector } from "react-redux";
import "./Flyout.scss";
import { RootStateType } from "../../features/redux/redux.types";
import { unselectAll } from "../../features/redux/SelectedSlice";
import { characterAPI } from "../../features/redux/api/ApiSlice";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import { Character } from "../../assets/types";

export default function Flyout() {
  const {currentPage} = useDataContext();
  
  const selectedCardsData = useSelector((state: RootStateType) => {
    return state.selectedCardsSliceReducer.selectedCardsData;
  });
  const {data} = characterAPI.useFetchCharactersQuery(currentPage);

  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(unselectAll());
  };

  const getAllSelectedData = () => {
    const results: Character[] = [];
    selectedCardsData.map((id) => {
      results.push(data.results[(id.toString())])
    });
    return results;
  }

  const convertToCSV = (items: Character[]) => {
    const csvContent = [
      Object.keys(items[0]).join(','),
      ...items.map(item => Object.values(item).join(','))
    ].join('\n');
    return csvContent;
  };

  const download = () => {
    const data = getAllSelectedData();
    const csvContent = convertToCSV(data);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${data.length}_characters.csv`);

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
        <button
          className="btn-selected-control"
          onClick={removeAll}
        >Unselect all</button>
        <button
          className="btn-selected-control"
          onClick={download}
        >Download</button>
      </div>
    </div>
  )
}
