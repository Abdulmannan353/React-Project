import axios from "axios";
const KEY= "AIzaSyAw-YEr9_DdGQBClf5obLuMJi56OtfcOpU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{ 
        part: "snippet",
    maxResult: 5,
    key: KEY,
},

});