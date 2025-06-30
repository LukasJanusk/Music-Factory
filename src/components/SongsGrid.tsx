import { Grid } from '@mui/material';
import SongGridItem from './SongGridItem';
import useSongStore from '../store';

export default function SongsGrid() {
  const songs = useSongStore((s) => s.songs);

  return (
    <div>
      {' '}
      <Grid
        container
        spacing={2}
        justifyContent={'start'}
        alignItems={'center'}
      >
        {songs.map((song) => (
          <Grid
            key={song.id}
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
    </div>
  );
}
