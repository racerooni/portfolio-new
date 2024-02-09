"use client";
import SectionHeader from "./section-header";
import { IoIosSend } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { sendEmail } from "@/actions/sendemail";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Kapcsolat");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="contact"
      className="mt-12 mb-20 sm:mb-28 w-full sm:w-[70%] xl:w-[40%] scroll-mt-16"
    >
      <div>
        <SectionHeader cim="Vedd fel velem a kapcsolatot!" />
        <p className="text-center text-gray-800">
          Elérhetsz ezen az e-mail címen:{" "}
          <a href="mailto:jaczenko.benedek@gmail.com" className="font-bold">
            jaczenko.benedek@gmail.com
          </a>
        </p>
        <p className="text-center underline">
          vagy töltsd ki az alábbiakat! 👇
        </p>
        <form
          className="mt-10 flex flex-col"
          action={async (formData) => {
            try {
              await sendEmail(formData);
              toast.success("E-mail sikeresen elküldve!");
            } catch (error) {
              toast.error("Hiba történt!");
            }
          }}
        >
          <input
            type="email"
            className="h-14 rounded-md border border-black/15 px-2 !focus:outline-none"
            name="senderEmail"
            placeholder="Az e-mail címed"
            maxLength={300}
            required
          />
          <textarea
            className="h-32 my-3 px-2 py-2 rounded-md border border-black/15 resize-none outline-slate-900"
            name="senderMsg"
            placeholder="Üzenet"
            maxLength={2000}
            required
          />
          <button className="py-2 px-3 bg-blue-600 text-white rounded-md transition duration-300 w-[8rem] h-[3rem] flex justify-center items-center gap-2 hover:scale-110 text-md hover:bg-white hover:text-blue-600 hover:border-2 hover:border-black/10 ">
            Küldés <IoIosSend />
          </button>
        </form>
      </div>
    </section>
  );
}
