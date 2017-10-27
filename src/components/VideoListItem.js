import React from 'react';

const VideoListItem = ({video}) => {
    return (

<div className="card">
  <img className="card-img-top" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
  <div className="card-block">
    <h4 className="card-title">{video.snippet.title}</h4>
  </div>
</div>
        
    )
  
}

export default VideoListItem;