import { Grid } from '@mui/material';
import SongGridItem from './SongGridItem';
import useSongStore from '../store';

export default function SongsGrid() {
  const songs = useSongStore((s) => s.songs);
  const favorites = useSongStore((s) => s.favoriteSongs);
  const getSongs = useSongStore((s) => s.addSongs);
  const handleFetch = () => {
    getSongs('Love');
  };

  return (
    <div>
      {' '}
      <Grid container spacing={2} justifyContent={'start'} alignItems={'start'}>
        {songs.map((song) => (
          <Grid
            key={song.id}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SongGridItem song={song} />
          </Grid>
        ))}
      </Grid>
      <button
        onClick={handleFetch}
        className="rounded-xl border-2 border-nebula-400 border-transparent bg-nebula-800 px-4 py-2 transition-all duration-200 hover:border-dotted"
      >
        Fetch Songs
      </button>
    </div>
  );
}
