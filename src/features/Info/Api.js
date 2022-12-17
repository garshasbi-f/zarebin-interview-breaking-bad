import axios from "axios";

export const getAllCharactersFromServer = async () => {
  const url = "http://localhost:3001/characters"; //"https://www.breakingbadapi.com/api/api/characters"
  const response = await axios.get(url);
  return response.data;
};

