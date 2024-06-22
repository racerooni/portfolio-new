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
      setActiveSection("About me");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      className="w-full md:w-2/3 lg:w-1/2 text-center px-6 scroll-mt-64 mb-8"
      id="about"
    >
      <SectionHeader cim="About me" />
      <motion.p
        className="leading-7 text-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        After my high school years, I continued my studies at the{" "}
        <span className="font-bold">Boronkay György Technikum</span> in Vác
        where I completed a <span className="underline">2</span> year long
        course. During my studies here I found my passion in{" "}
        <span className="font-bold">web development</span>. Out of all the
        fields software development has, this one aroused my interest the most,
        since it offers new challenges, new things to learn every once in a
        while. I am always eager to learn new frameworks as they pop up from
        nowhere. So far the frameworks/technologies I&apos;ve worked with
        include:{" "}
        <span className="underline">
          TypeScript, React, Next.JS, MySQL, Prisma, Node.js{" "}
        </span>
        and thanks to my assignments I had the opportunity to master{" "}
        <span className="underline">Python, C#, Python, PHP</span>although on a
        much lower level than the ones I mentioned above. In my free time I love
        playing video games, watch series, or even travel but what I love the
        most is learning new things such as languages. <br />
        Languages spoken:{" "}
        <span className="font-bold">
          Hungarian (native), English (Fluent), German (basic)
        </span>
      </motion.p>
    </section>
  );
}
