import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Play, Pause, Disc3Icon } from 'lucide-react';
import type { Song } from '../songService/schema';
import useSongStore from '../store';
import { usePopup } from '../context/popupContext';
import clsx from 'clsx';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import formatTime from '../utils/formatTime';
import HeartIcon from './reausable/HeartIcon';

type Props = {
  song: Song;
};
export default function SongGridItem({ song }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const popup = usePopup();
  const pause = useSongStore((s) => s.pause);
  const play = useSongStore((s) => s.play);
  const setCurrent = useSongStore((s) => s.setCurrent);
  const currentSong = useSongStore((s) => s.currentSong);
  const isPlaying = useSongStore((s) => s.currentPlaying);
  const favoriteSongs = useSongStore((s) => s.favoriteSongs);
  const setIsPlaying = useSongStore((s) => s.setCurrentPlaying);
  const removeFavorite = useSongStore((s) => s.removeFavoriteSong);
  const addFavorite = useSongStore((s) => s.addFavoriteSong);

  const isFavorite = () =>
    favoriteSongs.some((favorite) => song.id === favorite.id);

  const handlePlay = () => {
    if (currentSong?.id === song.id) {
      play();
      setIsPlaying(true);
      return;
    }
    try {
      setCurrent(song);
      play();
      setIsPlaying(true);
    } catch (error) {
      popup(
        'error',
        error instanceof Error ? error.message : 'Unable to play audio',
      );
    }
  };
  const handlePause = () => {
    pause();
  };
  const handleFavoriteToggle = () => {
    if (isFavorite()) {
      removeFavorite(song.id);
      popup('info', 'Song removed from Favorites');
    } else {
      addFavorite(song);
      popup('info', 'Song added to Favorites');
    }
  };

  const selectedAnimationStyles = isPlaying ? 'animate-glow' : 'animate-none';
  const borderStyles = `border-2 ${song.id === currentSong?.id ? 'border-cyan-500' : 'border-transparent'}`;

  return (
    <div
      className={clsx(
        'animate-fade-up',
        'rounded shadow-lg shadow-gray-800/50',
        borderStyles,
      )}
    >
      <Card
        elevation={0}
        sx={{
          display: 'flex',
          minWidth: '380px',
          justifyContent: 'space-between',
        }}
        className={clsx(song.id === currentSong?.id && selectedAnimationStyles)}
      >
        <Box
          className="flex-grow bg-gray-100/70 dark:bg-gray-900/60"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent
            sx={{ flex: '1 0 auto', position: 'relative' }}
            className="text-nebula-900 dark:text-nebula-100"
          >
            <div className="flex justify-between">
              <Typography
                component="div"
                variant="h5"
                className="font-extrabold text-nebula-600 dark:text-nebula-200"
              >
                {song.name}
              </Typography>{' '}
              <HeartIcon
                isFavorite={isFavorite()}
                onToggle={handleFavoriteToggle}
              />
            </div>
            <Typography
              variant="subtitle1"
              component="div"
              className="font-extrabold text-nebula-900 dark:text-nebula-100"
            >
              {song.artistName}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pb: 1,
              justifyContent: 'space-between',
            }}
          >
            {isPlaying && currentSong?.id === song.id ? (
              <IconButton onClick={handlePause}>
                <Pause className="h-12 w-12 text-nebula-900 dark:text-nebula-100" />
              </IconButton>
            ) : (
              <IconButton aria-label="play" onClick={handlePlay}>
                <Play className="h-12 w-12 text-nebula-900 dark:text-nebula-100" />
              </IconButton>
            )}
            {currentSong?.id === song.id && (
              <div className="flex gap-1 self-end">
                {isPlaying && (
                  <Disc3Icon className="animate-spin p-1 text-nebula-900/60 dark:text-nebula-100/60" />
                )}
                <Typography
                  className={clsx(
                    'text-sm italic text-nebula-900/60 animate-duration-500 dark:text-nebula-100/60',
                    !isPlaying && 'pl-8',
                  )}
                >
                  {isPlaying ? 'playing' : 'paused'}
                </Typography>
              </div>
            )}
            <Typography
              className="text-neutral-700 dark:text-nebula-100"
              sx={{ paddingRight: 2, alignSelf: 'flex-end' }}
            >
              {formatTime(song.duration)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isLoading && (
            <CircularProgress
              size={64}
              sx={{
                position: 'absolute',
              }}
            />
          )}
          <CardMedia
            component="img"
            onLoad={() => setIsLoading(false)}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              visibility: isLoading ? 'hidden' : 'visible',
            }}
            image={song.image}
            alt={`${song.name} image`}
          />
        </Box>
      </Card>
    </div>
  );
}
