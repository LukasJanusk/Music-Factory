import z from 'zod';

const schema = z.object({
  jamendoClientId: z.string(),
});

const config = schema.parse({
  jamendoClientId: import.meta.env.VITE_JAMENDO_CLIENT_ID,
});

export default config;
