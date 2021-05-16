import axios from 'axios';

const SHORTEN_URL_ENDPOINT = '/short-url';

export const shortenUrl = async (url: string): Promise<string> =>
  (await axios.post(SHORTEN_URL_ENDPOINT, { url })).data;
