'use server';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  if (!env.WEB3FORMS_ACCESS_KEY) {
    return {
      error:
        'Email service is not configured. Add WEB3FORMS_ACCESS_KEY to enable contact form emails.',
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        email: email,
        message: message,
        subject: 'New Message from Portfolio Contact Form',
        from_name: 'Portfolio Contact Form',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        data: 'Email sent successfully!',
      };
    } else {
      return {
        error: result.message || 'Failed to send email.',
      };
    }
  } catch {
    return {
      error: 'Something went wrong while sending the email.',
    };
  }
};
