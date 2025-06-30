import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppStore } from './types';
import { JAMENDO } from './songService';

const useSongStore = create<AppStore>()(
  persist(
    (set) => ({
      songs: [],
      favoriteSongs: [],
      addSongs: async (query) => {
        const fetched = await JAMENDO.getSongs(query, 10, 0);
        set(() => ({ songs: fetched }));
      },
      addFavoriteSong: (song) => {
        set((state) => ({ favoriteSongs: [...state.favoriteSongs, song] }));
      },
      removeSong: (id) =>
        set((state) => ({
          songs: state.songs.filter((song) => song.id !== id),
        })),
      removeAllSongs: () => set(() => ({ songs: [] })),
    }),
    { name: 'song-storage' },
  ),
);

export default useSongStore;
