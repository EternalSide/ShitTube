import React, { useState, useEffect, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Video";
import { fetchFromAPI } from "../utils/fetchFromApi";
import SearchBar from "./SearchBar";
function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("Музыка");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, backgroundColor: "#0f0f0f" }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        {/* СайдБар */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <SearchBar mobile />

        <Videos videos={videos} selectedCategory={selectedCategory} />
      </Box>
    </Stack>
  );
}

export default Feed;
