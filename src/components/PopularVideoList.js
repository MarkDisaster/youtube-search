import React, { useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import VideoList from './VideoList';

function PopularVideoList({ handleVideoSelect }) {

   const [popularVideoList, setPopularVideoList] = useState([])

   useEffect(() => {
      youtube.get(`/videos`, {
         params: {
            regionCode: 'CZ',
            chart: 'mostPopular'
         }
      })
         .then((res) => {
            setPopularVideoList(res.data.items)
            console.log(res.data.items)

         });
   }, [])
   console.log('popular: ' + popularVideoList)
   return (
      <div>
         <VideoList loadedVideos={popularVideoList} handleVideoSelect={handleVideoSelect} />
      </div>
   );
}

export default PopularVideoList;
