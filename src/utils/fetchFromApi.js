import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    // part: "snippet",
    // videoId: "M7FIvfx5J10",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "efaa4c86b7msh6c4c20b500d2eb6p115af6jsn55cff6c704f8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// Динамические вызовы Api
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
