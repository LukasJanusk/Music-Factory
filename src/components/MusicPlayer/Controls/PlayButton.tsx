import { IconButton } from '@mui/material';
import { usePopup } from '../../../context/popupContext';
import useSongStore from '../../../store';
import { Pause, Play } from 'lucide-react';
import clsx from 'clsx';

export default function PlayButton() {
  const playStopButtonBaseStyles = `hover:border-nebula-500  hover:text-nebula-300 dark:hover:text-nebula-700animate-duration-150 dark:bg-nebula-100 bg-nebula-600 text-nebula-100 rounded-full border-2 border-transparent transition-all duration-200 dark:text-nebula-900`;

  const playStopIconStyles = `h-12 w-12 md:h-8 md:w-8 dark:text-nebula-900 text-nebula-100`;
  const { currentSong, currentPlaying, play, pause } = useSongStore((s) => s);
  const popup = usePopup();

  const handlePause = () => {
    if (currentSong) {
      pause();
    }
  };
  const handlePlay = async () => {
    if (currentSong)
      try {
        play();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
  return (
    <div className={playStopButtonBaseStyles}>
      {!currentPlaying ? (
        <IconButton size="large" onClick={handlePlay}>
          <Play className={playStopIconStyles} />
        </IconButton>
      ) : (
        <IconButton size="large" onClick={handlePause}>
          <Pause className={clsx(playStopIconStyles)} />
        </IconButton>
      )}
    </div>
  );
}
