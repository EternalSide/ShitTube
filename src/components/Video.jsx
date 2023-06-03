import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "./Video.css";
function Video({ videos, direction, selectedCategory, searchFeed, searchTerm }) {
  const url = useParams();

  if (!videos?.length)
    return (
      <>
        <Box minHeight="95vh" sx={{ backgroundColor: "#0f0f0f" }} />
      </>
    );
  if (!videos) {
    alert(12);
  }
  return (
    <div className={searchFeed ? "videos__container videos__container_search" : "videos__container"}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        {searchFeed ? (
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{
              color: "white",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}> Поиск по запросу: {searchTerm}</span>
          </Typography>
        ) : (
          <span style={{ fontSize: "1.2rem" }}>{url.id ? "Смотреть еще" : `Категория: ${selectedCategory}`}</span>
        )}
      </Typography>

      <Stack direction={direction || "row"} flexWrap="wrap" alignItems="center" justifyContent="center" gap={0}>
        {videos.map((item, index) => (
          <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
        ))}
      </Stack>
    </div>
  );
}

export default Video;
