import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "//localhost:5000/api";

async function createGame(): Promise<string> {
  const res = await axios.get(BASE_URL + "/creategame");
  const data = await res.data;
  return data.gameId;
}

//DEV function
async function getGameData(id: string): Promise<any> {
  const res = await axios.get(`${BASE_URL}/gamedata/${id}`);
  const data = await res.data;
  return data;
}

export default {
  createGame,
  getGameData
};
