import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        const shelves = [ ...new Set(books.map(book => book.shelf)) ];
        this.setState({ books, shelves });
      });
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList books={books} shelves={shelves} />} />
        <Route path="/search" render={ () => <SearchPage search={BooksAPI.search} shelves={shelves} /> } />
      </div>
    );
  }
}

export default BooksApp;
