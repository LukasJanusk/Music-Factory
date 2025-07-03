import useSongStore from '../store';
import { useEffect, useRef } from 'react';

export default function useSongPlayer() {
  const currentSong = useSongStore((s) => s.currentSong);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    if (currentSong) {
      const newAudio = new Audio(currentSong.audio);
      audioRef.current = newAudio;
    } else {
      audioRef.current = null;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [currentSong]);

  return audioRef.current;
}
