import React, { useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import VideoList from './VideoList';

function PopularVideoList({ handleVideoSelect, listVideoHeader }) {

   const [popularVideoList, setPopularVideoList] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      youtube.get(`/videos`, {
         params: {
            regionCode: 'CZ',
            chart: 'mostPopular'
         }
      })
         .then((res) => {
            setPopularVideoList(res.data.items)
            setIsLoaded(true)
            console.log(res.data.items)

         });
   }, [])
   console.log('popular: ' + popularVideoList)

   if (isLoaded) {
      return (
         <div>
            <VideoList loadedVideos={popularVideoList} handleVideoSelect={handleVideoSelect} listVideoHeader={listVideoHeader} />
         </div>
      )
   } else {
      return (
         <div>Loading...</div>
      )
   }
}

export default PopularVideoList;
