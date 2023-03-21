import styledAdventures from "./adventures.module.css";
import { getAdventures } from "../../services/services";
import Card from "../../utils/Card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Adventures() {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);

  const elementRef = useRef(null);

  const getAdventure = async () => {
    try {
      const data = await getAdventures();
      setData(data);
      setWidth(elementRef.current.scrollWidth - elementRef.current.offsetWidth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdventure();
  }, []);

  return (
    <div id="adventure" className={styledAdventures.layout}>
      <h2 className={styledAdventures.title}>Discover Chairdnb adventures</h2>
      <p className={styledAdventures.subtitle}>
        Multi-day hackatons organized by local experts with activities, meals
        and accommodation included
      </p>
      <motion.div className={styledAdventures.sliderContainer}>
        <motion.div
          className={styledAdventures.slider}
          drag="x"
          ref={elementRef}
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {data?.map(({ id, ...adventure }) => (
            <motion.div key={id}>
              <Card {...adventure} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
