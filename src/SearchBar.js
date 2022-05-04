import React, { useState } from 'react'
import youtube from './apis/youtube';

function SearchBar({ updateLoadedVideos }) {

   const [searchTerm, setSearchTerm] = useState(null)

   const handleSubmit = (e) => {
      e.preventDefault()

      youtube.get(`/search`, {
         params: {
            q: searchTerm,
         }
      })
         .then((res) => {
            updateLoadedVideos(res.data.items)
            console.log(res.data.items)
         });

      console.log('poslední state:' + searchTerm)
   }

   const handleChange = (e) => {
      setSearchTerm(e.target.value)
   }

   return (
      <div className="App">
         <form onSubmit={handleSubmit}>
            <label>Video Search</label>
            <input onChange={handleChange} type="text"></input>
            <button type="submit">Search</button>
         </form>
      </div>
   );
}

export default SearchBar;
