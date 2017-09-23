// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .map(show => (
          <ShowCard
            key={show.imdbID}
            title={show.title}
            poster={show.poster}
            year={show.year}
            description={show.description}
            trailer={show.trailer}
            imdbID={show.imdbID}
          />
        ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
