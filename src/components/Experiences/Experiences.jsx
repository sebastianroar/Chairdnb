import { useEffect, useState, useRef } from "react";
import styledExperiences from "./experiences.module.css";
import { getExperiences } from "../../services/services";
import Card from "../../utils/Card";
import { motion } from "framer-motion";

export default function Experiences() {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);

  const elementRef = useRef(null);

  const getExperience = async () => {
    try {
      const data = await getExperiences();
      setData(data);
      setWidth(elementRef.current.scrollWidth - elementRef.current.offsetWidth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExperience();
  }, []);

  return (
    <div id="experiences" className={styledExperiences.layout}>
      <h2 className={styledExperiences.title}>Highly rated experiences</h2>
      <p className={styledExperiences.subtitle}>
        Multi-day extreme programming sessions organized by local experts with
        activities, meals and accommodation included
      </p>
      <motion.div className={styledExperiences.sliderContainer}>
        <motion.div
          className={styledExperiences.slider}
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
