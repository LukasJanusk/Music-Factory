import config from '../config';
import { getSongsFromResponse } from './schema';

const CLIENT_ID = config.jamendoClientId;

const createJamendo = () => {
  const getSongs = async (query: string, limit: number, offset: number) => {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      namesearch: query,
      format: 'json',
      offset: String(offset),
      limit: String(limit),
      fullcount: 'true',
    });

    try {
      const response = await fetch(
        `https://api.jamendo.com/v3.0/tracks/?${params}`,
      );
      const data = await response.json();
      const parsed = getSongsFromResponse(data);

      return parsed;
    } catch (error) {
      console.error(
        error instanceof Error
          ? error.message
          : 'Unknown error occured fetching songs',
      );
      throw error;
    }
  };
  return { getSongs };
};

export const JAMENDO = createJamendo();
