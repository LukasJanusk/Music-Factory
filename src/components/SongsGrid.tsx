import { Grid, Pagination } from '@mui/material';
import SongGridItem from './SongGridItem';
import useSongStore from '../store';
import { useEffect, useRef } from 'react';

export default function SongsGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const songs = useSongStore((s) => s.songs);
  const limit = useSongStore((s) => s.limit);
  const results = useSongStore((s) => s.results);
  const page = useSongStore((s) => s.page);
  const setPage = useSongStore((s) => s.setPage);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page]);

  return (
    <div className="flex flex-grow flex-col justify-center overflow-hidden">
      <div
        ref={gridRef}
        className="flex flex-grow flex-col overflow-auto px-4 py-8 sm:px-2"
      >
        <Grid
          container
          spacing={2}
          justifyContent={'center'}
          alignItems="center"
          wrap="wrap"
        >
          {songs.map((song) => (
            <Grid key={song.id} size={{ xs: 12, sm: 10, md: 6, lg: 4 }}>
              <SongGridItem song={song} />
            </Grid>
          ))}
        </Grid>
      </div>
      {songs.length > 0 && (
        <Pagination
          sx={{ background: 'transparent', width: 'auto' }}
          count={Math.ceil(results / limit)}
          onChange={handleChange}
          page={page}
          color="secondary"
          className="my-1 self-center"
        />
      )}
    </div>
  );
}
