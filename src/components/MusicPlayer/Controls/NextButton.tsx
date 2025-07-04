import { IconButton } from '@mui/material';
import { SkipForward } from 'lucide-react';
import useSongStore from '../../../store';
import { usePopup } from '../../../context/popupContext';

export default function NextButton() {
  const { currentSong, next } = useSongStore((s) => s);
  const popup = usePopup();
  const controlButtonBaseStyles =
    'hover:text-nebula-500 dark:text-nebula-100 text-nebula-800 transition-all duration-200 h-10 w-10 md:h-8 md:w-8';
  const handleNext = async () => {
    if (currentSong)
      try {
        next();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
  return (
    <div>
      <IconButton onClick={handleNext}>
        <SkipForward className={controlButtonBaseStyles} />
      </IconButton>
    </div>
  );
}
