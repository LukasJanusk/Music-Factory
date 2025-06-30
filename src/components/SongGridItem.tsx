import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { SkipBack, SkipForward, Play } from 'lucide-react';
import type { Song } from '../songService/schema';

type Props = {
  song: Song;
};
export default function SongGridItem({ song }: Props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', minWidth: '380px', maxWidth: '460px' }}>
      <Box
        className="bg-nebula-200/50 dark:bg-nebula-600/50"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {song.name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {song.artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipForward /> : <SkipBack />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <Play style={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipBack /> : <SkipForward />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={song.image}
        alt={`${song.name} image`}
      />
    </Card>
  );
}
