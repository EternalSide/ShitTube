import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "360px" },
        boxShadow: "none",
        borderRadius: "5px",
        marginBottom: "30px",
        marginRight: "20px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails?.high?.url || image}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "360px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#0f0f0f",
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="500" color="#9d9d9d">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon color="gray" sx={{ fontSize: 12, ml: "5px", color: "red" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
