"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  cim: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ cim }) => {
  return (
    <motion.h2
      className="text-center text-2xl font-bold mb-4 capitalize"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
    >
      {cim}
    </motion.h2>
  );
};
export default SectionHeader;
