import { Button, Drawer } from '@mui/material';
import useSongStore from '../../store';
import PlaylistCard from './PlaylistCard';

type Props = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Playlist({ open, setIsOpen }: Props) {
  const { songs } = useSongStore((s) => s);

  return (
    <Drawer
      open={open}
      onClose={() => setIsOpen(false)}
      variant="temporary"
      anchor="right"
      className="!pt-[env(safe-area-inset-top)]"
    >
      <div className="flex h-full flex-col overflow-hidden bg-nebula-200 dark:bg-nebula-800">
        <div className="flex flex-col overflow-auto">
          {songs.map((song) => {
            return (
              <div className="max-w-96">
                <PlaylistCard key={song.id} song={song} />{' '}
              </div>
            );
          })}
        </div>
        <Button
          sx={{
            backgroundColor: '#FF4E8E',
            minHeight: 80,
            borderRadius: 0,
            color: '#fff',
            marginTop: 'auto',

            '&:hover': {
              backgroundColor: '#e0437d',
            },
          }}
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </div>
    </Drawer>
  );
}
