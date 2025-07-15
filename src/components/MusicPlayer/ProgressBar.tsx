import { Slider } from '@mui/material';
import useSongStore from '../../store';
import { useEffect, useState } from 'react';
import formatTime from '../../utils/formatTime';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { repeat, autoplay, getAudio, setCurrentPlaying } = useSongStore(
    (s) => s,
  );
  const audio = getAudio();
  const handleProgressChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      audio.currentTime = value;
    }
  };
  useEffect(() => {
    const update = () => setProgress(audio.currentTime);
    audio.addEventListener('timeupdate', update);

    return () => audio.removeEventListener('timeupdate', update);
  }, [audio]);

  useEffect(() => {
    const handleEnded = () => {
      if (!repeat || !autoplay) {
        audio.pause();
        audio.currentTime = 0;
        setProgress(0);
        setCurrentPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [repeat, autoplay, audio, setCurrentPlaying, setProgress]);
  return (
    <div className="flex w-full flex-row items-center gap-2">
      <span className="pr-2 text-nebula-900 dark:text-nebula-100">
        {formatTime(progress)}
      </span>
      <Slider
        color="secondary"
        aria-label="show"
        value={progress}
        onChange={handleProgressChange}
        max={audio.duration || 100}
        sx={{
          '& .MuiSlider-thumb': {
            boxShadow: 'none',
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
        }}
      />
      <span className="pl-2 text-nebula-900 dark:text-nebula-100">
        {formatTime(isNaN(audio.duration) ? 0 : audio.duration)}
      </span>
    </div>
  );
}
