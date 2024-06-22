"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { projektjeim } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
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
      delay: 0.08 * i,
    },
  }),
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="projects" className="scroll-mt-16" ref={ref}>
      <SectionHeader cim="My projects:" />
      <div className="flex flex-col gap-4">
        {projektjeim.map((projekt, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            <Project {...projekt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
