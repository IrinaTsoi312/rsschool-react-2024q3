"use client";

import "./Card.scss";
import { CardProps } from "../../assets/types";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import { useDispatch } from "react-redux";
import { selectCard, unSelectCard } from "../../features/redux/SelectedSlice";

const Card = (props: CardProps) => {
  const { id, name, imgUrl, species, checked } = props;
  const {setShowDetails, setCardId} = useDataContext();
  const dispatch = useDispatch();

  const openCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    if ((e.target as HTMLElement).tagName.toLocaleLowerCase() === "input") {
      return;
    }
    setCardId(target.id);
    setShowDetails(true);
  };

  const switchSelectCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(selectCard({id: target.id, name: name, species: species}));
      console.log("Card was selected");
    } else if (!target.checked) {
      dispatch(unSelectCard(target.id));
      console.log("Card was unselected");
    }
  };

  return (
    <div
      id={id.toString()}
      className="card-container"
      onClick={openCard}
    >
      <input 
        type="checkbox" 
        name={(id.toString())}
        className="cardSelect" 
        id={id.toString()}
        onChange={switchSelectCard}
        checked={checked}
        data-testid="checkbox"
      />
      <div
        className="card"
        data-testid="card"
      >
        <div className="character-img" data-testid="imgContainer">
          <img
            src={imgUrl}
            alt="character Image"
            className="card-img"
            width="200px" />
        </div>
        <div className="character-description">
          <h3 className="character-name" data-testid="charName">{name}</h3>
          <table className="character-details">
            <tbody>
              <tr>
                <td className="character-title">Species: </td>
                <td className="character-details__value">{species}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
