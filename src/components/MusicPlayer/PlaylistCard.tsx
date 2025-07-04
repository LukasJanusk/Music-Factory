import { useState } from 'react';
import type { Song } from '../../songService/schema';
import useSongStore from '../../store';
import { CircularProgress, IconButton } from '@mui/material';
import TrashButton from '../reausable/TrashButton';
import { Disc3Icon, PauseIcon, PlayIcon } from 'lucide-react';
import clsx from 'clsx';
import { usePopup } from '../../context/popupContext';

type Props = {
  song: Song;
};

export default function PlaylistCard({ song }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const popup = usePopup();
  const {
    play,
    pause,
    setCurrent,
    setCurrentPlaying,
    currentSong,
    currentPlaying,
  } = useSongStore((s) => s);
  const removeSong = useSongStore((s) => s.removeSong);
  const isCurrent = song.id === currentSong?.id;
  const isPlaying = currentPlaying && isCurrent;
  const handlePlay = () => {
    if (currentSong?.id === song.id) {
      play();
      setCurrentPlaying(true);
      return;
    }
    try {
      setCurrent(song);
      play();
      setCurrentPlaying(true);
    } catch (error) {
      popup(
        'error',
        error instanceof Error ? error.message : 'Unable to play audio',
      );
    }
  };

  const cardBorderStyles = `${isCurrent ? 'border-cyan-500/70' : 'border-black/50'}`;
  const cardAnimationStyles = `${isPlaying ? 'animate-glow' : 'animate-none'}`;
  return (
    <div
      className={clsx(
        'flex items-center border-2 bg-nebula-200 pr-4 dark:bg-nebula-600',
        cardBorderStyles,
        cardAnimationStyles,
      )}
    >
      {isLoading && (
        <CircularProgress
          size={64}
          sx={{
            position: 'absolute',
          }}
        />
      )}
      <div className="relative top-0 h-24 w-24">
        <img
          className="absolute inset-0 h-full w-full object-fill"
          src={song.image}
          alt={`${song.name} image`}
          onLoad={() => setIsLoading(false)}
        ></img>
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-white/20">
          {isPlaying ? (
            <IconButton onClick={() => pause()} className="h-full w-full">
              <PauseIcon className="h-full w-full text-nebula-900/50 hover:text-nebula-900 dark:text-nebula-100/50 dark:hover:text-nebula-100" />
            </IconButton>
          ) : (
            <IconButton onClick={handlePlay} className="h-full w-full">
              <PlayIcon className="h-full w-full text-nebula-900/50 hover:text-nebula-900 dark:text-nebula-100/50 dark:hover:text-nebula-100" />
            </IconButton>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1 pl-2">
        <span className="text-lg font-bold text-nebula-600 dark:text-nebula-200">
          {song.name.length < 20 ? song.name : song.name.slice(0, 20) + '...'}
        </span>
        <span className="font-italic text-nebula-900/80 dark:text-nebula-100/80">
          {song.artistName.length < 20
            ? song.artistName
            : song.artistName.slice(0, 20) + '...'}
        </span>
      </div>
      <div className="ml-auto flex min-w-16 flex-col items-end justify-between">
        <TrashButton
          onClick={() => {
            removeSong(song.id);
          }}
        />
        {isCurrent && (
          <div className="flex">
            {currentPlaying && (
              <Disc3Icon className="animate-spin p-1 text-nebula-900/60 dark:text-nebula-100/60" />
            )}
            <span className="text-black/50 dark:text-white/50">
              {currentPlaying ? 'playing' : 'paused'}
            </span>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
