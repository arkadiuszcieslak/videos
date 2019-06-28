import axios from 'axios';

const KEY = 'AIzaSyAtwaI7uXNN7ZuLLtJbZJsnzmV5UYr3kzw';
const URL = 'https://www.googleapis.com/youtube/v3/search';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
