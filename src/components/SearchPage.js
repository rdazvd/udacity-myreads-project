import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './Book';

class SearchPage extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    shelfNames: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  };

  state = {
    query: '',
    queryResult: [],
    error: false
  };

  onInputChange = event => {
    const { search } = this.props;
    this.setState({ query: event.target.value });
    
    // run search method if user input updated query state 
    if (event.target.value)
      search(event.target.value.trim(), 20).then(queryResult => {
        queryResult.length > 0
          ? this.setState({ queryResult })
          : this.setState({ queryResult: [], error: true })
      });
    // reset component state if query value is empty
    else
      this.setState({ queryResult: [], error: false });
  };

  render() {
    const { queryResult, error } = this.state;
    const { books, shelves, shelfNames, onBookUpdate } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text"
              name="query"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { queryResult.length > 0 && (
              queryResult.map(book =>
                <Book 
                  key={book.id}
                  books={books}
                  book={book} 
                  shelves={shelves} 
                  shelfNames={shelfNames} 
                  onBookUpdate={onBookUpdate} 
                />
              ) 
            ) }
            { error && (
              <p>Search did not return any books.</p>
            ) }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;