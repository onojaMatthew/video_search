import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  }
  
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term)
  }
  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <input
          value={term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;