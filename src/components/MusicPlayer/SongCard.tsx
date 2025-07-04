import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import defaultCardImage from '@/assets/song_image_default.png';
import HeartIcon from '../reausable/HeartIcon';
import type { Song } from '../../songService/schema';
import useSongStore from '../../store';
import { usePopup } from '../../context/popupContext';
import clsx from 'clsx';
import { useState } from 'react';
import { Playlist } from './Playlist';

type Props = {
  song: Song;
};

export default function SongCard({ song }: Props) {
  const addFavorite = useSongStore((s) => s.addFavoriteSong);
  const removeFavorite = useSongStore((s) => s.removeFavoriteSong);
  const favorites = useSongStore((s) => s.favoriteSongs);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const popup = usePopup();

  const isFavorite = () =>
    favorites.some((favorite) => song.id === favorite.id);
  const handleFavoriteToggle = () => {
    if (isFavorite()) {
      removeFavorite(song.id);
      popup('info', 'Song removed from Favorites');
    } else {
      addFavorite(song);
      popup('info', 'Song added to Favorites');
    }
  };

  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          background: 'transparent',
          boxShadow: 'none',
          alignItems: 'center',
          gap: 1,
        }}
        onClick={() => setPlaylistOpen((prev) => !prev)}
        className="mr-0 transition-all duration-1000 hover:bg-white/10 md:mr-2 dark:hover:bg-slate-500/10"
      >
        <div className="hidden md:inline">
          <HeartIcon
            isFavorite={isFavorite()}
            onToggle={handleFavoriteToggle}
          />
        </div>

        <img
          alt="album cover"
          src={song.image || defaultCardImage}
          className={clsx('h-12 w-12 rounded object-cover')}
        ></img>
        <Box className="hidden md:flex">
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <span className="hidden md:inline-flex dark:text-nebula-100">
              {song.name.length > 20
                ? `${song.name.slice(0, 20)}...`
                : song.name}
            </span>
            <span className="hidden font-bold text-nebula-800 md:inline-flex dark:text-nebula-200">
              {song.artistName.length > 20
                ? `${song.artistName.slice(0, 20)}...`
                : song.artistName}
            </span>
          </CardContent>
        </Box>
      </Card>
      {playlistOpen && (
        <Playlist open={playlistOpen} setIsOpen={setPlaylistOpen} />
      )}
    </div>
  );
}
