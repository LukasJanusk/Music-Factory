import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import defaultCardImage from '@/assets/song_image_default.png';
import HeartIcon from '../reausable/HeartIcon';

type Props = {
  song?: {
    title: string;
    url: string;
    cover: string;
    artist: string;
    favorite: boolean;
  };
};

const defaultSong = {
  title: 'Song title',
  url: 'song_url_here',
  cover: 'song_cover_img_here',
  artist: 'Artist name',
  favorite: true,
};

export default function SongCard({ song = defaultSong }: Props) {
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
            <span className="dark:text-nebula-200 text-nebula-800 font-bold">
              {song.artist}
            </span>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
