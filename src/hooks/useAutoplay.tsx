import { useEffect } from 'react';
import { usePopup } from '../context/popupContext';
import useSongStore from '../store';

export function useAutoplay() {
  const popup = usePopup();
  const { play, next, autoplay } = useSongStore((s) => s);
  const audio = useSongStore((s) => s.getAudio());

  useEffect(() => {
    const autoPlayNext = () => {
      if (autoplay) {
        try {
          audio.currentTime = 0;
          audio.play();
          next();
        } catch (error) {
          popup(
            'error',
            error instanceof Error ? error.message : 'Unable to play audio',
          );
        }
      }
    };
    audio.addEventListener('ended', autoPlayNext);
    return () => {
      audio.removeEventListener('ended', autoPlayNext);
    };
  }, [audio, autoplay, next, popup, play]);
}
