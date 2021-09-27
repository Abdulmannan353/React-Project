import axios from "axios";
const KEY= "231n-HPhGvWB35GV_KOHXDHe";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{ 
        part: "snippet",
    maxResult: 5,
    key: KEY,
},

});