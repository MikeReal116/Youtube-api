import axios from "axios";
const KEY = "AIzaSyBqCHtm7NtNleK3YTAfbcmHcNUDmwAD3Ug";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:7,
        key: KEY,
    }
});