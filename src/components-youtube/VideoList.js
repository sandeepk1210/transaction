import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ onVideoSelect, videos }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      ))}
    </div>
  );
};

export default VideoList;
