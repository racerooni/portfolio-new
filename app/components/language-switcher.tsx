"use client";
import React from "react";
import en from "@/public/gb-1-32.png";
import toast, { Toaster } from "react-hot-toast";

const Disclaimer = () => {
  return (
    <div className="transition duration-300 bg-gray-900">
      <h1>Not available yet</h1>
    </div>
  );
};

export default function LanguageSwitcher() {
  return (
    <div className="absolute top-5 right-5">
      <Toaster />
      <img
        src={en.src}
        alt="en"
        onClick={() => {
          toast.error("Not available yet!");
        }}
        className="cursor-pointer"
      />
    </div>
  );
}
