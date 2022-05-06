import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ loadedVideos, handleVideoSelect, listVideoHeader }) {
   const renderedVideos = loadedVideos.map((video) => {
      return <VideoItem key={video.etag} video={video} handleVideoSelect={handleVideoSelect} />
   });

   return <div className="container m-auto p-8 text-grey-darkest">
      <div className="px-1 text-lg font-medium"><h2>{listVideoHeader}</h2></div>
      <div className="flex flex-wrap -mx-2 mb-4">{renderedVideos}</div>
   </div>;
};
export default VideoList;