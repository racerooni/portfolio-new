"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Separator() {
  return (
    <motion.div
      className="bg-blue-300 my-6 sm:my-16 h-12 w-1 rounded-full "
      initial={{ height: 0 }}
      animate={{ height: 64 }}
    ></motion.div>
  );
}
