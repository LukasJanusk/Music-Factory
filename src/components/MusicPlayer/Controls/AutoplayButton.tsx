import { RepeatIcon } from 'lucide-react';
import { usePopup } from '../../../context/popupContext';
import useSongStore from '../../../store';
import { IconButton } from '@mui/material';

export default function AutoplayButton() {
  const popup = usePopup();
  const { repeat, setRepeat, autoplay, setAutoplay } = useSongStore((s) => s);

  const handleAutoplay = () => {
    const newAutoplay = !autoplay;
    setAutoplay(newAutoplay);
    popup('info', `Autoplay set to ${newAutoplay ? 'On' : 'Off'}`);
    if (repeat && autoplay) {
      setRepeat(false);
    }
  };
  return (
    <IconButton onClick={handleAutoplay}>
      <RepeatIcon className="h-6 w-6 text-nebula-900 transition-all duration-200 ease-in-out hover:text-nebula-600 dark:text-nebula-100 dark:hover:text-nebula-400" />
    </IconButton>
  );
}
