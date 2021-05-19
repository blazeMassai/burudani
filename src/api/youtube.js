import axios from 'axios';

const KEY = 'AIzaSyCJy2GIBL8iN86TYdZnCHhNuM0I7ZArqyM';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',


    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})