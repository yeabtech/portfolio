import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    VERCEL_URL: z.string().min(1).optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
    RESEND_API_KEY: z.string().min(1).optional(),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
});
