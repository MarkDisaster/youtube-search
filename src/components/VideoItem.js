import React from 'react';

function VideoItem({ video, handleVideoSelect }) {
   return (
      <div onClick={() => { handleVideoSelect(video) }} className="w-1/4 px-4 py-2">
         <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="cursor-pointer" />
            <div>
               <div >{video.snippet.title}</div>
            </div>
         </div>
      </div>
   )
};
export default VideoItem;