import { Volume2Icon, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { Popover, Slider } from '@mui/material';

export default function VolumeControls() {
  const [volumeOn, setVolumeOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSliderChange = (_event: Event, newValue: number) => {
    setVolume(newValue);
  };
  const handleIconEnter = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <div
        className={'rounded-full border-2 border-transparent'}
        onMouseEnter={handleIconEnter}
        onMouseLeave={() => setAnchorEl(null)}
      >
        {volumeOn || volume > 0 ? (
          <Volume2Icon
            className="text-nebula-900 dark:text-nebula-100 h-6 w-6"
            onClick={() => {
              setVolumeOn((prev) => !prev);
              setVolume(0);
            }}
          />
        ) : (
          <VolumeX
            className="text-nebula-900 dark:text-nebula-100 h-6 w-6"
            onClick={() => {
              setVolumeOn((prev) => !prev);
            }}
          />
        )}
        <Popover
          className="w-30 h-70"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          slotProps={{
            paper: {
              sx: {
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
                backgroundColor: 'rgba(148, 0, 211, 0.1)',
              },
            },
          }}
        >
          <Slider
            orientation="vertical"
            value={volume}
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
    </div>
  );
}
