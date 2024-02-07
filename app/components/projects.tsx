"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { projektjeim } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projektek");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="projects" className="scroll-mt-16" ref={ref}>
      <SectionHeader cim="Projektjeim:" />
      <div className="flex flex-col gap-4">
        {projektjeim.map((projekt, i) => (
          <React.Fragment key={i}>
            <Project {...projekt} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
