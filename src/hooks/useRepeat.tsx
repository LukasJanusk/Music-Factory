import { useEffect } from 'react';
import useSongStore from '../store';

export default function useRepeat() {
  const { repeat, autoplay } = useSongStore((s) => s);
  const audio = useSongStore((s) => s.getAudio());
  useEffect(() => {
    const handleEnded = () => {
      if (!repeat || !autoplay) {
        audio.pause();
        audio.currentTime = 0;
        setProgress(0);
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [repeat, autoplay, audio, setIsPlaying, setProgress]);
}
