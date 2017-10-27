import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({video, onVideoSelect}) => {
  const videoItems = video.map((video, i) => {
    return <VideoListItem
    onVideoSelect = {onVideoSelect}
     video={video}  key={i}/>
  });
   console.log(video);
    return(
       <ul>{videoItems}</ul>
    )
}

export default VideoList;