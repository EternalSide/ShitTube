import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Video";
import { fetchFromAPI } from "../utils/fetchFromApi";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", overflowX: "hidden", height: "90vh", flex: 2 }}>
      <SearchBar mobile />
      <Videos videos={videos} searchFeed searchTerm={searchTerm} />
    </Box>
  );
}

export default SearchFeed;
