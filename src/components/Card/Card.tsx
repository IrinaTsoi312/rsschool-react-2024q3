import "./Card.scss";
import { CardProps } from "../../assets/types";

const Card = (props: CardProps) => {
  const { name, imgUrl, species } = props;

  return (
    <div className="card">
      <div className="character-img">
        <img
          src={imgUrl}
          alt="character Image"
          className="card-img"
          width="200px"
        />
      </div>
      <div className="character-description">
        <h3 className="character-name">{name}</h3>
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
  );
};

export default Card;

// export default class Card extends Component<CardProps> {
//   constructor(props: CardProps) {
//     super(props);
//   }
//   render() {
//     const { name, imgUrl, species } = this.props;
//     return (
//       <div className="card">
//         <div className="character-img">
//           <img
//             src={imgUrl}
//             alt="character Image"
//             className="card-img"
//             width="200px"
//           />
//         </div>
//         <div className="character-description">
//           <h3 className="character-name">{name}</h3>
//           <table className="character-details">
//             <tbody>
//               <tr>
//                 <td className="character-title">Species: </td>
//                 <td className="character-details__value">{species}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
