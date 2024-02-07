"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Rólam");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      className="w-full md:w-2/3 lg:w-1/2 text-center px-6 scroll-mt-16"
      id="about"
    >
      <SectionHeader cim="Rólam" />
      <motion.p
        className="leading-7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Középiskolás éveim után, a{" "}
        <span className="font-bold">váci Boronkay György Technikumában </span>
        egy <span className="underline">2</span> éves OKJ-s képzésbe kezdtem,
        ahol beleszerettem a <span className="font-bold">webfejlesztésbe</span>.
        A programozás világának ez a része keltette fel legjobban az
        érdeklődésemet, mivel ez az ágazat állandó kihívásokat és
        változatosságot kínál. Ahogy a technológia fejlődik, mindig új kihívások
        és lehetőségek merülnek fel, és én mindig izgatottan várom, hogy
        megismerhessem és megérthessem ezeket. A technológiák amikkel dolgoztam
        tartalmazzák a következőket:{" "}
        <span className="underline">
          TypeScript, React, Next.JS, MySQL, Prisma{" "}
        </span>
        illetve kisebb hétvégi projektek alatt{" "}
        <span className="underline">Node.js-t </span>is alkalmaztam, ezen felül
        tanulmányaim alatt a <span className="italic">C#, Python, PHP</span>{" "}
        világába is beismerést nyerhettem. Idegen nyelvek amiket beszélek:{" "}
        <span className="font-bold">Angol (C1)</span>
      </motion.p>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-4"
      >
        A programozáson kívűl szeretek nyelveket tanulni, videójátékokkal
        játszani és egyaránt utazni is.
      </motion.p>
    </section>
  );
}
