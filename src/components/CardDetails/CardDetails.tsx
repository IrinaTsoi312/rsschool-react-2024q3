"use client";

import { CardDetailsProps } from "@/assets/types";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import "./CardDetails.scss";
import { useRouter } from "next/router";

export default function CardDetails(props: CardDetailsProps) {
  const { fetchedData } = props;
  const { setShowDetails, cardId } = useDataContext();
  
  const closeCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setShowDetails(false);
  };

  const paramId = Number(cardId);
  return (
    <section data-testid="card-details-section">
      {fetchedData.map((item) => {
        if (paramId) {
          if (item.id === Number(cardId)!) {
            return (
              <div key={paramId} className="details-container">
              <h5 data-testid="d-title">Character Details:</h5>
              <div className="details-card" data-testid="d-card">
                <img src={item.image} alt={item.name} className="details-img" data-testid="d-image" />
                <div className="details-text">
                  <h3 className="details-name" data-testid="d-name">{item.name}</h3>
                  <table className="details-table">
                    <tbody>
                      <tr className="details-row">
                        <td className="details-title">Status:</td>
                        <td className="details-value" data-testid="d-status">{item.status}</td>
                      </tr>
                      <tr className="details-row">
                        <td className="details-title">Origin:</td>
                        <td className="details-value" data-testid="d-origin">{item.origin.name}</td>
                      </tr>
                      <tr className="details-row">
                        <td className="details-title">Location:</td>
                        <td className="details-value" data-testid="d-location">{item.location.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  <button className="btn-close" onClick={closeCard}></button>
                </div>
              </div>
            );
          }
        }
      })}
    </section>
  )
}
