import { useEffect, useState } from "react";
import styledAccommodation from "./accommodation.module.css";
import * as services from "../../services/services";
import starSVG from "../../assets/star_red.svg";

export default function Accommodation() {
  const [accommodations, setAccommodations] = useState([]);

  async function getAccommodations() {
    try {
      const data = await services.getAccommodations();
      setAccommodations(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAccommodations();
  }, []);

  return (
    <div id="accommodations" className={styledAccommodation.layout}>
      <h2 className={styledAccommodation.title}>
        Accommodation around the world
      </h2>
      <div className={styledAccommodation.grid}>
        {accommodations.map((accommodation) => (
          <div
            className={styledAccommodation.cardContainer}
            key={accommodation.id}
          >
            <img
              className={styledAccommodation.cardImage}
              src={accommodation.image_url}
              alt={`${accommodation.name}`}
            />
            <div className={styledAccommodation.cardInfoContainer}>
              <div className={styledAccommodation.horizontalGroup}>
                <div className={styledAccommodation.hostContainer}>
                  <p className={styledAccommodation.hostText}>SUPERHOST</p>
                </div>
                <p className={styledAccommodation.textName}>
                  {accommodation.name}
                </p>
                <div className={styledAccommodation.ratingContainer}>
                  <img src={starSVG} alt="star-image" />
                  <p className={styledAccommodation.ratingText}>
                    {accommodation.rating}
                  </p>
                </div>
              </div>
              <p className={styledAccommodation.textPrice}>
                From {`${+accommodation.price}`} € / person - 3 days
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
