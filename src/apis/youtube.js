import axios from 'axios'

export default axios.create({
   baseURL: process.env.REACT_APP_YOUTUBE_URL,
   params: {
      part: 'snippet',
      maxResults: 8,
      key: process.env.REACT_APP_YOUTUBE_API_KEY
   }
})