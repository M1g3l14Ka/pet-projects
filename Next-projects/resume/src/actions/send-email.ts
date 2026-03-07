'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'katcionma@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const sendEmail = async (FormData: FormData) => {
    const name = FormData.get('name') as string;
    const company = FormData.get('company') as string;
    const email = FormData.get('email') as string;
    const subject = FormData.get('subject') as string;
    const message = FormData.get('message') as string;

    if (!message || !email) {
        return { error: "Email and Message are required!" }
    }

    if (!emailRegex.test(email)) {
        return { error: "Invalid email format!" }
    }

    try {
        const data = await resend.emails.send({
            from: FROM_EMAIL,
            to: RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New job Offer! ${subject}`,
            text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage: ${message}`,
        });

        return { success: true, data }
    } catch {
        return { error: 'Something went wrong :(' }
    }

}