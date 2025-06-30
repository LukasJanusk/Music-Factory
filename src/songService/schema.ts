import z from 'zod';

const headersSchema = z.object({
  status: z.string(),
  code: z.number(),
  error_message: z.string(),
  warnings: z.string(),
  results_count: z.number(),
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
  isFavorite: false,
}));

export type Song = z.infer<typeof transformedSchema>;

export function getSongsFromResponse(data: unknown): Song[] {
  const parsed = parseResponse(data);
  const songs = parsed.results.map((song) => transformedSchema.parse(song));
  return songs;
}
