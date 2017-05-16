import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyBqL8H1lB-7Lw3wy9rDJkTEPs6FCm-tjaE';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default youtubeSearch;
