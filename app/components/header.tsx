"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { ActiveSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[99] relative scroll-mt-36" id="home">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-black/10 border-opacity-40 bg-white bg-opacity-60 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[45rem] sm:rounded-b-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex top-0 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[0.1rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap w-[22rem]  justify-center gap-3 items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.url}
              className="h-3/4 flex items-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-3 hover:text-gray-950 transition outline-none",
                  {
                    "text-gray-950": ActiveSection === link.name,
                  }
                )}
                href={link.url}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === ActiveSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10"
                    layoutId="ActiveSection"
                    transition={{ type: "tween", stiffness: 300, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
