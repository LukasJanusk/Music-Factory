import z from 'zod';

const schema = z.object({
  jamendoClientId: z.string(),
  jamendoApiKey: z.string(),
});

const config = schema.parse({
  jamendoClientId: import.meta.env.VITE_JAMENDO_CLIENT_ID,
  jamendoApiKey: import.meta.env.VITE_JAMENDO_API_KEY,
});

export default config;
