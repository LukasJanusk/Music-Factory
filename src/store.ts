import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppStore } from './types';
import { JAMENDO } from './songService';

const useSongStore = create<AppStore>()(
  persist(
    (set, get) => {
      const audio = new Audio();

      return {
        songs: [],
        currentSong: null,
        currentPlaying: false,
        favoriteSongs: [],
        autoplay: false,
        repeat: false,
        query: '',
        offset: 0,
        limit: 20,
        page: 1,
        results: 1,

        getAudio: () => audio,
        play: async () => {
          await audio.play();
          set({ currentPlaying: true });
        },
        pause: () => {
          audio.pause();
          set({ currentPlaying: false });
        },
        next: () => {
          const { songs, currentSong, setCurrent } = get();
          if (!currentSong || !songs) return;
          const index = songs.indexOf(currentSong);
          if (index >= 0 && index + 1 < songs.length) {
            const nextSong = songs[index + 1];
            setCurrent(nextSong);
          }
        },
        previous: () => {
          const { songs, currentSong, setCurrent } = get();
          if (!currentSong || !songs) return;
          const index = songs.indexOf(currentSong);
          if (index > 0) {
            const prevSong = songs[index - 1];
            setCurrent(prevSong);
          }
        },
        setAutoplay: (value) => {
          set(() => ({ autoplay: value }));
        },
        setRepeat: (value) => {
          set(() => ({ repeat: value }));
          audio.loop = value;
        },
        setQuery: (query) => {
          set({ query });
        },
        setCurrent: (song) => {
          const wasPlaying = !audio.paused;
          const { currentSong } = get();
          if (currentSong?.id === song?.id) {
            set({ currentSong: song });
            return;
          }
          audio.pause();
          audio.src = song ? song.audio : '';
          if (wasPlaying) audio.play();
          set({ currentSong: song, currentPlaying: wasPlaying });
        },
        setCurrentPlaying: (isPlaying) => set({ currentPlaying: isPlaying }),
        setPage: async (page: number) => {
          const { limit, query } = get();
          const newOffset = (page - 1) * limit;
          set(() => ({
            offset: newOffset,
            page: page,
          }));
          const fetched = await JAMENDO.getSongs(query, limit, newOffset);
          set({ songs: fetched.songs, results: fetched.results });
        },
        getSongs: async (search) => {
          const { limit, offset, query } = get();
          if (search !== query) {
            set({ page: 1, offset: 0 });
          }
          const fetched = await JAMENDO.getSongs(search, limit, offset);
          set({ songs: fetched.songs, results: fetched.results });
        },
        setSongs: (songs) => {
          set({ songs });
        },
        addFavoriteSong: (song) => {
          set((state) => {
            return {
              favoriteSongs: [...state.favoriteSongs, song],
              songs: state.songs.map((s) =>
                s.id === song.id ? { ...s, isfavorite: true } : s,
              ),
            };
          });
        },
        removeFavoriteSong: (id) => {
          set((state) => {
            return {
              favoriteSongs: state.favoriteSongs.filter((s) => s.id !== id),
              songs: state.songs.map((s) =>
                s.id === id ? { ...s, isfavorite: false } : s,
              ),
            };
          });
        },
        removeSong: (id) =>
          set((state) => ({
            songs: state.songs.filter((song) => song.id !== id),
          })),
        removeAllSongs: () => set(() => ({ songs: [] })),
      };
    },
    {
      name: 'song-storage',
      partialize: (state) => ({
        songs: state.songs,
        autoplay: state.autoplay,
        repeat: state.repeat,
        favoriteSongs: state.favoriteSongs,
        query: state.query,
        offset: state.offset,
        limit: state.limit,
        page: state.page,
      }),
    },
  ),
);

export default useSongStore;
