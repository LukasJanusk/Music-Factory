import { Autocomplete, IconButton, TextField } from '@mui/material';
import { autocompleteSuggestions } from './searchAutocomplete';
import { SearchIcon } from 'lucide-react';
import useSongStore from '../../../store';
import { useIsDarkTheme } from '../../../hooks/useIsDarkTheme';
import { useViewContext } from '../../../context/viewContext';

export default function Search() {
  const listboxStyles =
    'overflow-hidden bg-nebula-200 dark:bg-nebula-600 text-nebula-900 dark:text-nebula-200';
  const isDark = useIsDarkTheme();
  const query = useSongStore((s) => s.query);
  const setQuery = useSongStore((s) => s.setQuery);
  const setPage = useSongStore((s) => s.setPage);
  const { route, setRoute } = useViewContext();
  const handleSearch = () => {
    if (query.length > 0) {
      setPage(1);
      if (route !== 'home') {
        setRoute('home');
      }
    }
  };

  return (
    <div className="min-w-64">
      <Autocomplete
        slotProps={{
          listbox: {
            className: listboxStyles,
          },
        }}
        freeSolo
        size="small"
        id="search"
        inputValue={query}
        onInputChange={(_, newValue) => setQuery(newValue)}
        disableClearable
        options={autocompleteSuggestions}
        sx={{
          color: () => (isDark ? 'white' : 'black'),
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: () => (isDark ? 'white' : 'black'),
            },
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: () => (isDark ? 'white' : 'black'),
            },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            className="rounded-md bg-nebula-200 text-nebula-900 dark:bg-nebula-600 dark:text-nebula-200"
            slotProps={{
              inputLabel: {
                className: 'text-red-500',
                sx: {
                  color: (theme) =>
                    theme.palette.primary[isDark ? 'light' : 'dark'],
                  '&.Mui-focused': {
                    color: (theme) =>
                      theme.palette.primary[isDark ? 'light' : 'dark'],
                    borderColor: (theme) =>
                      theme.palette.primary[isDark ? 'light' : 'dark'],
                  },
                },
              },
              input: {
                ...params.InputProps,

                endAdornment: (
                  <IconButton aria-label="Search" onClick={handleSearch}>
                    <SearchIcon className="text-nebula-800 dark:text-nebula-200" />
                  </IconButton>
                ),
              },
            }}
          />
        )}
      />
    </div>
  );
}
