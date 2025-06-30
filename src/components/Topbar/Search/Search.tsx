import { Autocomplete, IconButton, TextField } from '@mui/material';
import { autocompleteSuggestions } from './searchAutocomplete';
import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

export default function Search() {
  const [input, setInput] = useState('');
  const listboxStyles =
    'overflow-hidden bg-nebula-200 dark:bg-nebula-600 text-nebula-900 dark:text-nebula-200';
  return (
    <div className="min-w-64">
      <Autocomplete
        slotProps={{
          listbox: {
            className: listboxStyles,
          },
        }}
        freeSolo
        size="medium"
        id="search"
        inputValue={input}
        onInputChange={(_, newValue) => setInput(newValue)}
        disableClearable
        options={autocompleteSuggestions}
        sx={{
          color: (theme) => theme.palette.primary.light,
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: (theme) => theme.palette.primary.dark,
            },
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: (theme) => theme.palette.primary.dark,
            },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            className="rounded-md bg-nebula-200 text-nebula-100 dark:bg-nebula-600 dark:text-nebula-200"
            slotProps={{
              inputLabel: {
                sx: {
                  color: (theme) => theme.palette.primary.dark,
                  '&.Mui-focused': {
                    color: (theme) => theme.palette.primary.dark,
                  },
                },
              },
              input: {
                ...params.InputProps,
                endAdornment: (
                  <IconButton aria-label="Search">
                    <SearchIcon className="text-nebula-800 dark:text-nebula-200" />
                  </IconButton>
                ),
                // sx: { color: (theme) => theme.palette.primary.dark },
              },
            }}
          />
        )}
      />
    </div>
  );
}
