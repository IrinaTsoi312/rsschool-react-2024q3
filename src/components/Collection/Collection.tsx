import { useSelector } from "react-redux";
import { Character, CollectionProps } from "../../assets/types";
import Card from "../Card/Card";
import "./Collection.scss";
import { RootStateType } from "../../features/redux/redux.types";
import Flyout from "../Flyout/Flyout";

export default function Collection(props: CollectionProps) {
  const {fetchedData} = props;

  const selectedCardsData = useSelector((state: RootStateType) => {
    return state.selectedCardsSliceReducer.selectedCardsData;
  });

  const isChecked = (itemId: string) => {
    return Boolean(selectedCardsData.filter((item) => itemId === item.id).length);
  };

  return (
    <section className="card-collection">
      <div className="collection">
        {fetchedData.results.length === 0 ? <div>Sorry, there is no character with this name</div> : (fetchedData!.results!.map((item: Character) => (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.image}
            name={item.name}
            species={item.species}
            checked={isChecked(item.id.toString())}
          />
        )))}
        {selectedCardsData.length !== 0 ? <Flyout /> : null}
      </div>
    </section>
  )
}
