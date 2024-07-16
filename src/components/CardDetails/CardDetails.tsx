import { useParams } from "react-router-dom";
import { CardDetailsProps } from "../../assets/types";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import "./CardDetails.scss";

export default function CardDetails(props: CardDetailsProps) {
  const { fetchedData } = props;
  const { setShowDetails } = useDataContext();
  const data = fetchedData.results;
  
  const { id } = useParams();
  
  const closeCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setShowDetails(false);
    console.log("Open");
  };
  return (
    <section>
      {data.map((item) => {
        if (item.id === Number(id)!) {
          return (
            <div key={id} className="details-container">
              <h5>Character Details:</h5>
              <div className="details-card">
                <img src={item.image} alt={item.name} className="details-img" />
                <div className="details-text">
                  <h3 className="details-name">{item.name}</h3>
                  <table className="details-table">
                    <tbody>
                      <tr className="details-row">
                        <td className="details-title">Status:</td>
                        <td className="details-value">{item.status}</td>
                      </tr>
                      <tr className="details-row">
                        <td className="details-title">Origin:</td>
                        <td className="details-value">{item.origin.name}</td>
                      </tr>
                      <tr className="details-row">
                        <td className="details-title">Location:</td>
                        <td className="details-value">{item.location.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  <button className="btn-close" onClick={closeCard}></button>
              </div>
            </div>
          );
        }
      })}
    </section>
  )
}
