import { Character, CollectionProps } from "../../assets/types";
import Card from "../Card/Card";
import "./Collection.scss";

export default function Collection(props: CollectionProps) {
  const {fetchedData} = props;
  return (
    <section className="card-collection">
      <div className="collection">
        {fetchedData.results.length === 0 ? <div>Sorry, there is no character with this name</div> : (fetchedData!.results!.map((item: Character) => (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.image}
            name={item.name}
            species={item.species} />
        )))}
      </div>
    </section>
  )
}
