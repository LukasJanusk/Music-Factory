import { IconButton } from '@mui/material';
import { usePopup } from '../../../context/popupContext';
import useSongStore from '../../../store';
import { RotateCcwIcon } from 'lucide-react';

export default function RepeatButton() {
  const popup = usePopup();
  const { repeat, setRepeat, autoplay, setAutoplay } = useSongStore((s) => s);

  const handleRepeat = () => {
    const newRepeat = !repeat;
    setRepeat(newRepeat);
    popup('info', `Repeat set to:  ${newRepeat ? 'On' : 'Off'}`);
    if (autoplay && newRepeat) {
      setAutoplay(false);
    }
  };

  return (
    <IconButton onClick={handleRepeat}>
      <RotateCcwIcon className="h-6 w-6 text-nebula-900 transition-all duration-200 ease-in-out hover:text-nebula-600 dark:text-nebula-100 dark:hover:text-nebula-400" />
    </IconButton>
  );
}
