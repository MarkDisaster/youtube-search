import React, { useState } from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList';

import './App.css';

function App() {

  const [loadedVideos, setLoadedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  /*Tuhle funkci přenesu do SearchBar.js pomocí parametru v souboru SearchBar.js */
  const updateLoadedVideos = (videos) => {
    setLoadedVideos(videos)
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }


  return (
    <div className="App">
      <SearchBar updateLoadedVideos={updateLoadedVideos} />
      <VideoDetail selectedVideo={selectedVideo} />
      <VideoList loadedVideos={loadedVideos} handleVideoSelect={handleVideoSelect} />
    </div>
  );
}

export default App;
