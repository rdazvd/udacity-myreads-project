import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList books={this.state.books} />} />
        <Route path="/search" render={ () => <SearchPage search={BooksAPI.search} /> } />
      </div>
    );
  }
}

export default BooksApp;
