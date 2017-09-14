import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchTerm: 'my debug statement'
  //   };
  //   this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>Hello</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
              `${show.title} ${show.description}`.toUpperCase().includes(this.state.searchTerm.toUpperCase())
            )
            .map(show => (
              <ShowCard
                key={show.imdbID}
                title={show.title}
                poster={show.poster}
                year={show.year}
                description={show.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
