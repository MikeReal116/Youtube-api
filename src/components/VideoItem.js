import React from "react";
import "./VideoItem.css";

const VideoItem = ({video, getSelectedVideo}) =>{
    const selectedVideo = () =>{
        getSelectedVideo(video);
    }

    return(
        <div  className="video" onClick = {selectedVideo}>
            <img  src={video.snippet.thumbnails.default.url} alt={video.snippet.description} className="video-thumb"/>
            <h3 className="video-title">{video.snippet.title}</h3>
        </div>
    )
}
export default VideoItem;