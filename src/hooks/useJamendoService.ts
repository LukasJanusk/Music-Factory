import { useEffect, useState } from 'react';
import { JAMENDO } from '../songService';
import type { Song } from '../songService/schema';

export default function useJamendoSearch(query: string) {
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    JAMENDO.getSongs(query, 10, 0).then(setSongs);
  }, [query]);
  return songs;
}
