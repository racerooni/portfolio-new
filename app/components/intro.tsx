"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import hu from "@/public/hu-1-32.png";
import en from "@/public/gb-1-32.png";
import ReactCountryFlag from "react-country-flag";
import Huicon from "./huicon";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Kezdőlap");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      className="mb-8 max-w-[50rem] md:max-w-[80rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="https://i.imgur.com/nu50MTB.jpg"
            alt="Avatar"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.3rem] shadow-2xl border-white object-cover object-center"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Helló, Benedek vagyok.</span>{" "}
        <span className="italic">Junior</span> szintű webfejlesztő. Örülök, hogy
        meglátogattad a portfólióm. A fő technológiám a{" "}
        <span className="underline">React(Next.js)</span>.{" "}
        <span className="font-bold">Front-end</span> webfejlesztőként a célom
        az, hogy minél felhasználóbarátabb weboldalakat hozzak létre.
      </motion.p>
      <motion.div
        className="flex justify-center w-1/2 mx-auto flex-col gap-3.5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex gap-3.5 justify-center flex-col items-center">
          <Link
            href="#contact"
            className="bg-blue-600 text-white px-4 md:px-7 py-3 flex items-center gap-2 rounded-full hover:bg-blue-500 transition duration-300 w-100 hover:scale-105 font-medium border border-blue-950/10 focus:scale-105 w-[15rem] md:w-auto"
          >
            Vedd fel velem a kapcsolatot! 👈
          </Link>
          <div className="w-[17rem] py-3 bg-gray-950 text-white rounded-full flex gap-3 ps-4 transition duration-300 w-100 hover:scale-105">
            <div className="flex justify-center items-center gap-2 ">
              Töltsd le a CV-m! <BsDownload />
            </div>
            <div className="text-white border-l-[1px] border-gray-500 flex ps-2 items center justify-between">
              <a href="/CV.pdf" className="pe-2" download={true}>
                <img
                  src={hu.src}
                  alt="hu"
                  className="w-6 h-6 border border-black/10 rounded-[100%] transition duration-300 hover:scale-125"
                />
              </a>
              <a href="/CV.pdf" className="pe-2" download={true}>
                <img
                  src={en.src}
                  alt="hu"
                  className="w-6 h-6 border border-black/10 rounded-[100%] transition duration-300 hover:scale-125 "
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-3.5 mx-auto">
          <a
            href="https://www.linkedin.com/in/benedek-jaczenko-7a25a4249/"
            target="_blank"
            className="h-12 w-12 rounded-full flex justify-center items-center border border-gray-400 hover:bg-gray-300 transition duration-300 hover:scale-110 focus:scale-105"
          >
            <FaLinkedin className="h-8 w-8 rounded-md" />
          </a>
          <a
            href=""
            target="_blank"
            className="h-12 w-12 rounded-full flex justify-center items-center border border-gray-400 hover:bg-gray-300 transition duration-300 hover:scale-110 focus:scale-105"
          >
            <BsGithub className="h-8 w-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
