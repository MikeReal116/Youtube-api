import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({video, className}) => {

    if(!video){
        return<div></div>
    }
    const iframeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div className={className}>
            <iframe src={iframeSrc} title="iframe-title" className="iframe"/>
            <h4 className="header">{video.snippet.title}</h4>
            <p className="text">{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;
