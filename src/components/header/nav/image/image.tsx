import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { opacity } from "../../anim";

import styles from "./style.module.scss";

interface IndexProps {
  src: string;
  isActive: boolean;
  alt: string;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={src}
        width={400}
        height={400}
        className="my-32 w-full h-auto object-cover"
        alt={"Navigation preview image"}
        priority={true}
      />
    </motion.div>
  );
};

export default Index;
