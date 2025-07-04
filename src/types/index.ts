import type { Song } from '../songService/schema';

export type AppStore = {
  songs: Song[];
  currentSong: Song | null;
  currentPlaying: boolean;
  favoriteSongs: Song[];
  autoplay: boolean;
  repeat: boolean;
  query: string;
  offset: number;
  limit: number;
  page: number;
  results: number;

  setAutoplay: (value: boolean) => void;
  setRepeat: (value: boolean) => void;
  getAudio: () => HTMLAudioElement;
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  setCurrent: (song: Song | null) => void;
  setCurrentPlaying: (isPlaying: boolean) => void;
  setQuery: (query: string) => void;
  setPage: (page: number) => Promise<void>;
  getSongs: (query: string) => Promise<void>;
  addFavoriteSong: (song: Song) => void;
  removeFavoriteSong: (id: string) => void;
  setSongs: (songs: Song[]) => void;
  removeSong: (id: string) => void;
  removeAllSongs: () => void;
};
