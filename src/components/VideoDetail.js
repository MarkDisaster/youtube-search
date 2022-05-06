import React from "react";

function VideoDetail({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>
    </div>;
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
      <div className="max-w-screen-lg w-full py-5 max-h-24 overflow-y-hidden">
        <h1 className="text-xl font-medium">{selectedVideo.snippet.title}</h1>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;