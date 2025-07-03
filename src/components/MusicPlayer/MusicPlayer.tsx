import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  RepeatIcon,
  RotateCcwIcon,
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import VolumeControls from './VolumeControls';
import SongCard from './SongCard';
import useSongStore from '../../store';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import { usePopup } from '../../context/popupContext';
import { useEffect } from 'react';

const controlButtonBaseStyles = `h-7 w-7 hover:text-nebula-500 dark:text-nebula-100 transition-all duration-200`;
const playStopButtonBaseStyles = `hover:border-nebula-500  hover:text-nebula-300 dark:hover:text-nebula-700animate-duration-150 dark:bg-nebula-100 bg-nebula-600 text-nebula-100 rounded-full border-2 border-transparent transition-all duration-200 dark:text-nebula-900`;
const playStopIconStyles = `h-8 w-8 dark:text-nebula-900 text-nebula-100`;

export default function MusicPlayer() {
  const popup = usePopup();
  const pause = useSongStore((s) => s.pause);
  const play = useSongStore((s) => s.play);
  const next = useSongStore((s) => s.next);
  const previous = useSongStore((s) => s.previous);
  const setRepeat = useSongStore((s) => s.setRepeat);
  const setAutoplay = useSongStore((s) => s.setAutoplay);
  const audio = useSongStore((s) => s.getAudio());
  const repeat = useSongStore((s) => s.repeat);
  const autoplay = useSongStore((s) => s.autoplay);
  const current = useSongStore((s) => s.currentSong);
  const isPlaying = useSongStore((s) => s.currentPlaying);

  const handlePause = () => {
    if (current) {
      pause();
    }
  };
  const handlePlay = async () => {
    if (current)
      try {
        play();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
  const handleRepeat = () => {
    const newRepeat = !repeat;
    setRepeat(newRepeat);
    popup('info', `Repeat set to:  ${newRepeat ? 'On' : 'Off'}`);
    if (autoplay && newRepeat) {
      setAutoplay(false);
    }
  };
  const handleAutoplay = () => {
    const newAutoplay = !autoplay;
    setAutoplay(newAutoplay);
    popup('info', `Autoplay set to ${newAutoplay ? 'On' : 'Off'}`);
    if (repeat && autoplay) {
      setRepeat(false);
    }
  };
  const handleNext = async () => {
    if (current)
      try {
        next();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
  const handlePrevious = async () => {
    if (current)
      try {
        previous();
      } catch (error) {
        popup(
          'error',
          error instanceof Error ? error.message : 'Unable to play audio',
        );
      }
  };
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
  const playerAnimationStyles = `animate-fade-up animate-duration-500 `;
  return (
    current && (
      <div
        className={clsx(
          'flex h-auto w-full items-center justify-between gap-4 self-end bg-nebula-300 shadow-lg dark:bg-nebula-800',
          playerAnimationStyles,
        )}
      >
        <div className="ml-4 flex items-center justify-end gap-1 text-black">
          <IconButton onClick={handlePrevious}>
            <SkipBack className={controlButtonBaseStyles} />
          </IconButton>

          <div className={playStopButtonBaseStyles}>
            {!isPlaying ? (
              <IconButton size="large" onClick={handlePlay}>
                <Play className={playStopIconStyles} />
              </IconButton>
            ) : (
              <IconButton size="large" onClick={handlePause}>
                <Pause className={clsx(playStopIconStyles)} />
              </IconButton>
            )}
          </div>
          <IconButton onClick={handleNext}>
            <SkipForward className={controlButtonBaseStyles} />
          </IconButton>
        </div>
        <div className="flex flex-grow items-center gap-3">
          <ProgressBar />
          <VolumeControls />
          <IconButton onClick={handleAutoplay}>
            <RepeatIcon className="h-6 w-6 text-nebula-900 transition-all duration-200 ease-in-out hover:text-nebula-600 dark:text-nebula-100 dark:hover:text-nebula-400" />
          </IconButton>
          <IconButton onClick={handleRepeat}>
            <RotateCcwIcon className="h-6 w-6 text-nebula-900 transition-all duration-200 ease-in-out hover:text-nebula-600 dark:text-nebula-100 dark:hover:text-nebula-400" />
          </IconButton>
        </div>
        <div className="flex items-start">
          <SongCard song={current} />
        </div>
      </div>
    )
  );
}
