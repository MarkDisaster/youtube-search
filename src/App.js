import React, { useState } from 'react'
import SearchBar from './SearchBar'

import './App.css';

function App() {

  const [loadedVideos, setLoadedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const updateLoadedVideos = (videos) => {
    setLoadedVideos(videos)
  }



  return (
    <div className="App">
      <SearchBar updateLoadedVideos={updateLoadedVideos} />
    </div>
  );
}

export default App;
