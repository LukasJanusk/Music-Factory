import { Volume2Icon, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import { IconButton, Popover, Slider } from '@mui/material';
import useSongStore from '../../../store';

export default function VolumeControls() {
  const [volumeOn, setVolumeOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [modalOpen, setModalOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement | null>(null);
  const audio = useSongStore((s) => s.getAudio());

  const handleSliderChange = (_event: Event, newValue: number) => {
    if (newValue === 0) setVolumeOn(false);
    setVolume(newValue);
    audio.volume = newValue / 100;
  };
  const handleIconEnter = () => {
    setModalOpen(true);
  };

  const handleIconLeave = () => {
    setModalOpen(false);
  };
  return (
    <div
      ref={anchorEl}
      onMouseEnter={handleIconEnter}
      onMouseLeave={handleIconLeave}
    >
      <div>
        {' '}
        {volumeOn || volume > 0 ? (
          <IconButton>
            <Volume2Icon className="h-6 w-6 text-nebula-900 dark:text-nebula-100" />
          </IconButton>
        ) : (
          <IconButton>
            <VolumeX className="h-6 w-6 text-nebula-900 dark:text-nebula-100" />
          </IconButton>
        )}
      </div>

      <Popover
        className="w-30 h-70"
        open={modalOpen}
        anchorEl={anchorEl.current}
        onClose={handleIconLeave}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              justifyItems: 'center',
              overflow: 'hidden',
              padding: '4px',
              paddingTop: '20px',
              paddingBottom: '20px',
              height: '160px',
              width: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
            },
          },
        }}
      >
        <Slider
          orientation="vertical"
          value={volume}
          max={100}
          onChange={handleSliderChange}
          color="secondary"
          size="medium"
          sx={{
            '& .MuiSlider-thumb': {
              boxShadow: 'none',
            },
            '& .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb.Mui-active':
              {
                boxShadow: 'none',
              },
          }}
        />
      </Popover>
    </div>
  );
}
