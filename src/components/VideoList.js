import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({video}) => {
  const videoItems = video.map((video, i) => {
    return <VideoListItem video={video}  key={i}/>
  });
   console.log(video);
    return(
       <ul>{videoItems}</ul>
    )
}

export default VideoList;