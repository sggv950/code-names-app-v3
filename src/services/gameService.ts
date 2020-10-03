import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api' : '//localhost:5000/api';

export async function createGame(keywords: Array<string>): Promise<string> {
  const body = {
    keywords,
  };
  const res = await axios.post(BASE_URL + '/creategame', body);
  const data = await res.data;
  return data.gameId;
}

export async function getRandomKeywords(
  numOfKeywords: number,
): Promise<string[]> {
  const res = await axios.get(`${BASE_URL}/keywords?num=${numOfKeywords}`);
  const { kws } = await res.data;
  return kws;
}

//DEV function
export async function getGameData(id: string): Promise<any> {
  const res = await axios.get(`${BASE_URL}/gamedata/${id}`);
  const data = await res.data;
  return data;
}
