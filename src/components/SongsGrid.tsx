import { Grid } from '@mui/material';
import SongGridItem from './SongGridItem';
export default function SongsGrid() {
  const songs = [
    {
      id: '1',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '2',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '3',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '4',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '5',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '6',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
    {
      id: '7',
      title: 'Song title',
      url: 'song_url_here',
      cover: 'song_cover_img_here',
      artist: 'Artist name',
      favorite: true,
    },
  ];
  return (
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
          <SongGridItem />
        </Grid>
      ))}
    </Grid>
  );
}
