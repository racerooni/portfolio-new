"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { kepessegek } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { time } from "console";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * i,
    },
  }),
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section
      ref={ref}
      className="mb-16 max-w-[53rem] scroll-mt-16 mt-8 text-center sm:mb-8"
      id="skills"
    >
      <SectionHeader cim="Skills:" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {kepessegek.map((nev, i) => (
          <motion.li
            key={i}
            className="bg-white border border-black/10 rounded-md px-5 py-3"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {nev}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
