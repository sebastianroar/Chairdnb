import styledExplorer from "./explorer.module.css";
import accommodations from "../../assets/explorer_accommodations.png";
import experiences from "../../assets/explorer_experiences.png";
import adventures from "../../assets/explorer_adventures.png";
import { Link } from "react-scroll";

export default function Explorer() {
  return (
    <div className={styledExplorer.layout}>
      <h2 className={styledExplorer.title}>Explorer Chairdnb</h2>
      <div className={styledExplorer.cards}>
        <Link
          to="accommodations"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img src={accommodations} alt="accommodations" />
          <p>Accommodations</p>
        </Link>
        <Link
          to="experiences"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img src={experiences} alt="experiences" />
          <p>Experiences</p>
        </Link>
        <Link
          to="adventure"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img src={adventures} alt="adventures" />
          <p>Adventures</p>
        </Link>
      </div>
    </div>
  );
}
