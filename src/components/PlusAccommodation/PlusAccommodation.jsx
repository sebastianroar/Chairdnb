import styledPlusAcc from "./plusaccommodation.module.css";
import discoverSVG from "../../assets/arrow_discover.svg";
import { Link } from "react-scroll";

export default function PlusAccommodation() {
  return (
    <div className={styledPlusAcc.container}>
      <h1 className={styledPlusAcc.title}>Chairdnb Plus accommodation</h1>
      <p className={styledPlusAcc.subtitle}>
        A selection of accommodation verified according to quality and
        connectivity criteria
      </p>
      <div className={styledPlusAcc.bigCard}>
        <div className={styledPlusAcc.at}>@</div>
        <Link
          to="accommodations"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styledPlusAcc.buttonPA}
        >
          <div className={styledPlusAcc.textButton}>
            Discover accommodations
          </div>
          <div>
            <img src={discoverSVG} alt="Discover Button" />
          </div>
        </Link>
      </div>
    </div>
  );
}
