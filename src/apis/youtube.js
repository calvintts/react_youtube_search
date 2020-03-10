import axios from 'axios'
const KEY = 'AIzaSyDzs_c4an_D-grOLfkwFsiF5lc3O3Si3rg'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key : KEY,
    }
})