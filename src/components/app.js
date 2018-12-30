import _ from "lodash";
import React, { Component } from "react";
import SearchBar from './SearchBar';
import YTSearch from "youtube-api-search";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = "AIzaSyDh9InWw2RMchx-m1OMwtz5sAKBCM0eHVQ";
export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards')
  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term },(videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state; 
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList 
          videos={videos} 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
