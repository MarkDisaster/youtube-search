import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ loadedVideos, handleVideoSelect }) {
   const renderedVideos = loadedVideos.map((video) => {
      return <VideoItem key={video.etag} video={video} handleVideoSelect={handleVideoSelect} />
   });

   return <div>{renderedVideos}</div>;
};
export default VideoList;