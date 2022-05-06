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

  let showVideoList
  let listVideoHeader = 'Populární videa v ČR'
  if (loadedVideos.length < 1) {
    listVideoHeader = 'Populární videa v ČR'
    showVideoList = <PopularVideoList handleVideoSelect={handleVideoSelect} listVideoHeader={listVideoHeader} />

  } else {
    listVideoHeader = 'Vyhledaná videa'
    showVideoList = <VideoList loadedVideos={loadedVideos} handleVideoSelect={handleVideoSelect} listVideoHeader={listVideoHeader} />

  }


  return (
    <div className="App bg-gray-50 text-gray-700 font-sans">
      <SearchBar updateLoadedVideos={updateLoadedVideos} />
      <VideoDetail selectedVideo={selectedVideo} />
      {showVideoList}
    </div>
  );
}

export default App;
