"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const msg = formData.get("senderMsg");
    const senderEmail = formData.get("senderEmail")

    if (!msg || !senderEmail || typeof msg !== "string") {
        return {
            error: "Hibás uzenet"
        }
    }
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "jaczenko.benedek@gmail.com",
        subject: "Portfolio message",
        text: `Email cím: ${senderEmail} \n Uzenet:${msg}`
    })
  };

