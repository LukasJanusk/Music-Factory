import useSongStore from '../store';
import { Grid, Pagination } from '@mui/material';
import SongGridItem from './SongGridItem';
import { useEffect, useRef, useState } from 'react';

export default function Favorites() {
  const [page, setPage] = useState(1);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const { favoriteSongs, limit } = useSongStore((s) => s);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);
  const paginatedFavorites = favoriteSongs.slice(
    (page - 1) * limit,
    page * limit,
  );
  return (
    <div className="flex flex-grow animate-fade flex-col justify-center overflow-hidden">
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
          {paginatedFavorites.map((favorite) => (
            <Grid size={{ xs: 12, sm: 10, md: 6, lg: 4 }}>
              <SongGridItem key={favorite.id} song={favorite} />
            </Grid>
          ))}
        </Grid>
      </div>{' '}
      {favoriteSongs.length > 0 && (
        <Pagination
          className="my-1 self-center"
          color="secondary"
          count={Math.ceil(favoriteSongs.length / limit)}
          onChange={handlePageChange}
          results={favoriteSongs.length}
        ></Pagination>
      )}
    </div>
  );
}
