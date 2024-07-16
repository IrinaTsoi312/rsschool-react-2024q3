import "./Card.scss";
import { CardProps } from "../../assets/types";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";

const Card = (props: CardProps) => {
  const { id, name, imgUrl, species } = props;
  const {setShowDetails} = useDataContext();

  const openCard = (): void => {
    setShowDetails(true);
  };

  return (
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
          width="200px"
        />
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
  );
};

export default Card;
