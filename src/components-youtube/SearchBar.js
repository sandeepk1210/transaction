import React from "react";

class SearchBar extends React.Component {
  state = { videoName: [] };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.videoName);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Youtube Video Search</label>
            <input
              type="text"
              placeholder="Search Video..."
              value={this.state.videoName}
              onChange={(e) => this.setState({ videoName: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
