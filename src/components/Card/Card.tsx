import "./Card.scss";
import { CardProps } from "../../assets/types";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import { useDispatch } from "react-redux";
import { selectCard, unSelectCard } from "../../features/redux/SelectedSlice";

const Card = (props: CardProps) => {
  const { id, name, imgUrl, species, checked } = props;
  const {setShowDetails} = useDataContext();
  const dispatch = useDispatch();

  const openCard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    if ((e.target as HTMLElement).tagName.toLocaleLowerCase() === "input") {
      return;
    }
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
    <div className="card-container">
      <input 
        type="checkbox" 
        name={(id.toString())}
        className="cardSelect" 
        id={id.toString()}
        onChange={switchSelectCard}
        checked={checked}
        data-testid="checkbox"
      />
      <NavLink
        to={`/card-collection/details/${id}`}
        className="card"
        onClick={openCard}
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
      </NavLink>
    </div>
  );
};

export default Card;
