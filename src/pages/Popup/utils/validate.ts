import { z } from 'zod';

export const JsonInputSchema = z.object({
  username: z.string(),
});

// extract the inferred type
export type JsonInput = z.infer<typeof JsonInputSchema>;
