import { z } from 'zod';

export const CountrySchema = z.object({
  name: z.string(),
  capital: z.string(),
  region: z.string(),
  subregion: z.string(),
  population: z.number(),
  borders: z.array(z.string()),
  currencies: z.array(
    z.object({
      code: z.string(),
      name: z.string(),
      symbol: z.string(),
    }),
  ),
  languages: z.array(
    z.object({
      name: z.string(),
    }),
  ),
  flags: z.object({
    png: z.string(),
  }),
  topLevelDomain: z.array(z.string()),
  alpha3Code: z.string(),
});

export const DetailsParamsSchema = z.object({
  params: z.object({
    alpha3Code: z.string(),
  }),
});

export type DetailsParamsType = z.infer<typeof DetailsParamsSchema>;

export type CountryType = z.infer<typeof CountrySchema>;
