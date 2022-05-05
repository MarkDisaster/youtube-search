import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList';
import PopularVideoList from './components/PopularVideoList';

function App() {

  const [loadedVideos, setLoadedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  /*Tuhle funkci přenesu do SearchBar.js pomocí parametru v souboru SearchBar.js */
  const updateLoadedVideos = (videos) => {
    setLoadedVideos(videos)
    setSelectedVideo(null)
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  let popularVideoList
  if (loadedVideos.length < 1) {
    popularVideoList = <PopularVideoList handleVideoSelect={handleVideoSelect} />
  }


  return (
    <div className="App">
      <SearchBar updateLoadedVideos={updateLoadedVideos} />
      <VideoDetail selectedVideo={selectedVideo} />
      <VideoList loadedVideos={loadedVideos} handleVideoSelect={handleVideoSelect} />
      {popularVideoList}
    </div>
  );
}

export default App;
