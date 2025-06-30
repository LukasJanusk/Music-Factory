import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppStore } from './types';
import { JAMENDO } from './songService';

const useSongStore = create<AppStore>()(
  persist(
    (set, get) => ({
      songs: [],
      currentSong: null,
      favoriteSongs: [],
      query: '',
      offset: 0,
      limit: 10,
      page: 0,
      setQuery: (query) => {
        set({ query });
      },
      setCurrent: (song) => set(() => ({ currentSong: song })),
      nextPage: async () => {
        const { offset, limit, page, query } = get();
        const newOffset = offset + limit;
        set(() => ({
          offset: newOffset,
          page: page + 1,
        }));
        const fetched = await JAMENDO.getSongs(query, limit, newOffset);
        set({ songs: fetched });
      },
      previousPage: () => {
        const { page } = get();
        if (page === 0) return;
        set((state) => ({
          offset: state.offset - state.limit,
          page: state.page - 1,
        }));
      },
      getSongs: async (query) => {
        const { limit } = get();
        const fetched = await JAMENDO.getSongs(query, limit, 0);
        set({ songs: fetched, page: 0 });
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
