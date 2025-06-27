import { Slider } from '@mui/material';

export default function ProgressBar() {
  return (
    <Slider
      color="secondary"
      sx={{
        '& .MuiSlider-thumb': {
          boxShadow: 'none',
          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'none',
          },
        },
      }}
    />
  );
}
//    <div className="bg-nebula-200 dark:bg-nebula-700 ull w-inherit flex w-full rounded-xl p-0.5">
//       <div className="from-nebula-400 to-nebula-600 dark:from-nebula-500 dark:to-nebula-300 h-3 w-1/2 rounded-xl bg-gradient-to-r"></div>
//       <div className="bg-nebula-100 dark:bg-nebula-100 po h-3 w-3 -translate-x-2 rounded-full"></div>
//     </div>
