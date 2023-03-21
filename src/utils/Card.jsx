import styledCard from "./card.module.css";
import starSVG from "../assets/star_green.svg";

export default function Cards({ country, rating, price, image_url }) {
  return (
    <div className={styledCard.cardContainer}>
      <img className={styledCard.cardImage} src={image_url} alt="place image" />
      <div className={styledCard.cardInfoContainer}>
        <p className={styledCard.textCountry}>{country}</p>
        <p className={styledCard.textBody}>2 Nights PACKAGE All Inclusive</p>
        <p className={styledCard.textPrice}>
          From {`${+price}`} € / person - 3 days
        </p>
      </div>
      <div className={styledCard.ratingContainer}>
        <p className={styledCard.ratingText}>{rating.toFixed(1)}</p>
        <img src={starSVG} alt="star-image" />
      </div>
    </div>
  );
}
