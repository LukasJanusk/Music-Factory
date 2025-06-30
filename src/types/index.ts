import type { Song } from '../songService/schema';

export type AppStore = {
  songs: Song[];
  favoriteSongs: Song[];
  addSongs: (query: string) => void;
  addFavoriteSong: (song: Song) => void;
  removeSong: (id: string) => void;
  removeAllSongs: () => void;
};
