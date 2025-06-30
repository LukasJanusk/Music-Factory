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
  return (
    <Card
      sx={{
        display: 'flex',
        minWidth: '380px',

        justifyContent: 'space-between',
      }}
    >
      <Box
        className="flex-grow bg-nebula-300/50 dark:bg-nebula-600/50"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{ flex: '1 0 auto' }}
          className="text-nebula-900 dark:text-nebula-100"
        >
          <Typography
            component="div"
            variant="h5"
            className="font-extrabold text-nebula-600 dark:text-nebula-200"
          >
            {song.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="font-extrabold text-nebula-900 dark:text-nebula-100"
          >
            {song.artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <SkipBack className="text-nebula-900 dark:text-nebula-100" />
          </IconButton>
          <IconButton aria-label="play/pause">
            <Play
              style={{ height: 38, width: 38 }}
              className="text-nebula-900 dark:text-nebula-100"
            />
          </IconButton>
          <IconButton aria-label="next">
            <SkipForward className="text-nebula-900 dark:text-nebula-100" />
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
