import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

class SearchPage extends React.Component {
  state = {
    query: '',
    queryResult: [],
    error: false
  };

  onInputChange = event => {
    const { search } = this.props;
    const { query } = this.state;
    
    this.setState({ query: event.target.value });
    
    // run async search method if there is user input 
    if (event.target.value)
      search(query.trim(), 20).then(queryResult => {
        queryResult.length
          ? this.setState({ queryResult })
          : this.setState({ queryResult: [], error: true })
      });
    // reset component state if query value is empty
    else
      this.setState({ queryResult: [], error: false });
  };

  render() {
    const { queryResult, error } = this.state;
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
              queryResult.map(book => <Book book={book} />) 
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