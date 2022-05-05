import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ loadedVideos, handleVideoSelect }) {
   const renderedVideos = loadedVideos.map((video) => {
      return <VideoItem key={video.etag} video={video} handleVideoSelect={handleVideoSelect} />
   });

   return <div className="container m-auto p-8 text-grey-darkest"><div className="flex flex-wrap -mx-2 mb-4">{renderedVideos}</div></div>;
};
export default VideoList;