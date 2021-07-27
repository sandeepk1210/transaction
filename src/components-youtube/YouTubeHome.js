import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class YouTubeHome extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("nab more than money");
  }

  onSearchSubmit = async (videoName) => {
    const results = await youtube.get("/search", {
      params: {
        q: videoName,
      },
    });

    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui two column grid">
          <div className="column">
            <div className="ui segment">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YouTubeHome;
