import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos,getSelectedVideo}) =>{
   const videoResult = videos.map(video=>{
       return <VideoItem video ={video} key={video.id.videoId} getSelectedVideo = {getSelectedVideo}/>
    });

    return(
        <div>{videoResult}</div>
    )
}

export default VideoList;