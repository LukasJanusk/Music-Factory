import z from 'zod';

const headersSchema = z.object({
  status: z.string(),
  code: z.number(),
  error_message: z.string(),
  warnings: z.string(),
  results_count: z.number(),
  results_fullcount: z.number(),
});
const songSchema = z.object({
  id: z.string(),
  name: z.string(),
  artist_name: z.string(),
  album_name: z.string(),
  album_image: z.string(),
  image: z.string(),
  audio: z.string(),
  audiodownload: z.string(),
  duration: z.coerce.number(),
});
const responseSchema = z.object({
  headers: headersSchema,
  results: z.array(songSchema),
});

export const parseResponse = (data: unknown) => responseSchema.parse(data);

const transformedSchema = songSchema.transform((data) => ({
  id: data.id,
  name: data.name,
  artistName: data.artist_name,
  albumName: data.album_name,
  albumImage: data.album_image,
  image: data.image,
  audio: data.audio,
  audioDownload: data.audiodownload,
  duration: data.duration,
  isFavorite: false,
}));

export type Song = z.infer<typeof transformedSchema>;

export function getSongsFromResponse(data: unknown): {
  results: number;
  songs: Song[];
} {
  const parsed = parseResponse(data);
  const resultsCount = parsed.headers.results_fullcount;
  const songs = parsed.results.map((song) => transformedSchema.parse(song));
  return { results: resultsCount, songs: songs };
}
