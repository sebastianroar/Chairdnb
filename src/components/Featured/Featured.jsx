import { useEffect, useState, useRef } from "react";
import { getFeatured } from "../../services/services";
import styledFeatured from "./featured.module.css";
import { motion } from "framer-motion";

export default function Featured() {
  const [featuredList, setFeaturedList] = useState([]);
  const [width, setWidth] = useState(0);

  const carousel = useRef(null);

  const getFeaturedCards = async () => {
    try {
      const data = await getFeatured();
      setFeaturedList(data);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeaturedCards();
  }, []);

  const Card = ({ verified_stays, price, image_url }) => {
    return (
      <div className={styledFeatured.cardContainer}>
        <div className={styledFeatured.card}>
          <div className={styledFeatured.at}>@</div>
          <img
            className={styledFeatured.image}
            src={image_url}
            alt="Destination image"
          />
        </div>
        <p className={styledFeatured.textStays}>
          MORE THAN {verified_stays} VERIFIED STAYS
        </p>
        <p className={styledFeatured.textPrice}>
          From {price} € / person - 3 days
        </p>
      </div>
    );
  };

  return (
    <div className={styledFeatured.layout}>
      <h2 className={styledFeatured.title}>
        Featured Chairdnb Plus Destinations
      </h2>
      <p className={styledFeatured.subtitle}>
        Multi-day pair programming sessions organized by local experts with
        activities, meals and accommodation included
      </p>
      <motion.div
        ref={carousel}
        className={styledFeatured.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styledFeatured.innerCarousel}
        >
          {featuredList?.map(({ id, ...featured }) => (
            <motion.div key={id} className="">
              <Card {...featured} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
