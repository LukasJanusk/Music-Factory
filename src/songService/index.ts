import config from '../config';

const CLIENT_ID = config.jamendoClientId;

export async function getSongs(query: string, limit: number, offset: number) {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    namesearch: query,
    format: 'json',
    offset: String(offset),
    limit: String(limit),
  });

  const response = await fetch(
    `https://api.jamendo.com/v3.0/tracks/?${params}`,
  );
  const data = await response.json();
  return data;
}
