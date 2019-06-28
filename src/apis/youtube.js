import axios from 'axios';

const KEY = 'AIzaSyAtwaI7uXNN7ZuLLtJbZJsnzmV5UYr3kzw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
