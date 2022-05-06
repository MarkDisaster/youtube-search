import React from 'react';

function VideoItem({ video, handleVideoSelect }) {
   return (
      <div onClick={() => { handleVideoSelect(video) }} className="w-1/4 px-3 py-2">
         <div>
            <div className="overflow-hidden">
               <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="transition-all cursor-pointer hover:scale-125" />
            </div>
            <div>
               <div >{video.snippet.title}</div>
            </div>
         </div>
      </div>
   )
};
export default VideoItem;