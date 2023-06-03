import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Video";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromApi";
function ChannelDetail() {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            zIndex: 10,
            height: "300px",
            background: `#0f0c29` /* fallback for old browsers */,
            background: `-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)` /* Chrome 10-25, Safari 5.1-6 */,
            background: `linear-gradient(to right, #24243e, #302b63, #0f0c29)`,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos}></Videos>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
