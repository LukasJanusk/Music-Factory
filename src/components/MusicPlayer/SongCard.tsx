import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import defaultCardImage from '@/assets/song_image_default.png';
import HeartIcon from '../reausable/HeartIcon';
import type { Song } from '../../songService/schema';

type Props = {
  song: Song | null;
};

const defaultSong = {
  title: 'Song title',
  url: 'song_url_here',
  cover: 'song_cover_img_here',
  artist: 'Artist name',
  favorite: true,
};

export default function SongCard({ song }: Props) {
  if (!song) return <div></div>;
  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          background: 'transparent',
          boxShadow: 'none',
          alignItems: 'center',
          marginRight: '10px',
          gap: 1,
        }}
      >
        <HeartIcon isFavorite={false} onToggle={() => {}} />
        <img
          alt="album cover"
          src={defaultCardImage}
          className="h-12 w-12 rounded object-cover"
        ></img>
        <Box sx={{ display: 'flex' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <span className="dark:text-nebula-100">Song title here</span>
            <span className="font-bold text-nebula-800 dark:text-nebula-200">
              {song.artistName}
            </span>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
