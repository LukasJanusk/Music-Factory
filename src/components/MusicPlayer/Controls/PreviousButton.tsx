import { IconButton } from '@mui/material';
import { SkipBack } from 'lucide-react';
import useSongStore from '../../../store';
import { usePopup } from '../../../context/popupContext';

export default function PreviousButton() {
  const controlButtonBaseStyles = `dark:text-nebula-100 text-nebula-800 transition-all duration-200 h-10 w-10 md:h-8 md:w-8`;
  const { currentSong, previous } = useSongStore((s) => s);
  const popup = usePopup();
  const handlePrevious = async () => {
    if (currentSong)
      try {
        previous();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
  return (
    <div className="">
      <IconButton onClick={handlePrevious}>
        <SkipBack className={controlButtonBaseStyles} />
      </IconButton>
    </div>
  );
}
