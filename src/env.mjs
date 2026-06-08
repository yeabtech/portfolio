import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    VERCEL_URL: z.string().min(1).optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
    WEB3FORMS_ACCESS_KEY: z.string().min(1).optional(),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
  },
});
