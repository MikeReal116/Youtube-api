import React, {useState} from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";


const App = () =>{
  const[video,setVideo] = useState([]);
  const [selected, setSelected] = useState(null);

  const   getSearch = async (text) =>{
    const response = await youtube.get("/search",{
       params:{
         q:text
       }
     });
     setVideo(response.data.items);
     setSelected(response.data.items[0]);
   }

   const getSelectedVideo = (vid) =>{
     setSelected(vid);
   }

  return (
    <div className="container">
        <Search text={getSearch}/>
        <div className="container__content">
          <VideoDetail video = {selected} className="container__content-left"/>
          <VideoList videos={video} getSelectedVideo={getSelectedVideo} className="container__content-right"/>
        </div>
      </div>
  );
}

export default App;
