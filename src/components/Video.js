import React, {Component} from 'react';
import Search from './Search';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyAckaE5kutAXfx4nzTKyx6P4h37kFDgfqY';

class Video extends Component{
  constructor(props){
      super(props);
        this.state = { 
          videos: [],
          selectVideo: null
        };
this.videoSearch('code');
      
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term, maxResults: 6}, (videos) => {
          this.setState({ 
            videos: videos,
            selectVideo : videos[0]
          });
      });
    }

    render(){

      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

      return (
        <div>
          <div className='col-md-8'>
              <h1>Video</h1> 
              <Search onSearchTermChange={videoSearch}/>
            </div>
            <div className='col-md-8'>
              <VideoDetails video={this.state.selectVideo} />
          </div>

            <div className='col-md-8'>
              <VideoList 
              onVideoSelect ={selectVideo => this.setState({selectVideo})}
              video={this.state.videos} />
          </div>
        </div>
      )
    }
}

export default Video;