'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  if (!env.RESEND_API_KEY) {
    return {
      error: 'Email service is not configured. Add RESEND_API_KEY to enable contact form emails.',
    };
  }

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'yeabsiragenene21@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Something went wrong!`,
    };
  }
};
