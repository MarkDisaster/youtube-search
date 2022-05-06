import React, { useState } from "react";

function VideoDetail({ selectedVideo }) {

  const [showedDescription, setShowedDescription] = useState(false)

  if (!selectedVideo) {
    return <div></div>;
  }

  const showMore = (e) => {
    if (!showedDescription) {
      setShowedDescription(true)
      e.target.innerHTML = 'ZOBRAZIT MÉNĚ'

    } else {
      setShowedDescription(false)
      e.target.innerHTML = 'ZOBRAZIT VÍCE'
    }
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  console.log(typeof selectedVideo);
  return (
    <div className="w-full items-center flex-col flex justify-center">
      <div className="bg-gray-900 flex justify-center w-full">
        <div className="max-w-screen-lg w-full">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe src={videoSrc} className="w-full" allowFullScreen title="Video player" />
          </div>
        </div>
      </div>
      <div className=" border-b border-solid">
        <div className={"description max-w-screen-lg w-full text-sm py-5 overflow-y-hidden " + (!showedDescription ? 'max-h-28' : '')}>
          <h1 className="text-xl font-medium">{selectedVideo.snippet.title}</h1>
          <p>{selectedVideo.snippet.description}</p>
        </div>
        <button type="button" onClick={showMore} className="text-xs mt-8 mb-5 font-medium">ZOBRAZIT VÍCE</button>
      </div>
    </div>
  );
};

export default VideoDetail;