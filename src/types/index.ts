import type { Song } from '../songService/schema';

export type AppStore = {
  songs: Song[];
  currentSong: Song | null;
  favoriteSongs: Song[];
  query: string;
  offset: number;
  limit: number;
  page: number;
  setCurrent: (song: Song | null) => void;
  setQuery: (query: string) => void;
  previousPage: () => void;
  nextPage: () => void;
  getSongs: (query: string) => void;
  addFavoriteSong: (song: Song) => void;
  removeSong: (id: string) => void;
  removeAllSongs: () => void;
};
