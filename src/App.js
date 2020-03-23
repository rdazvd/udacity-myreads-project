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

  onBookUpdate = (targetBook, shelf) => {
    BooksAPI.update(targetBook, shelf)
      .then(() => {
        // mutate the shelf value of the targetBook object
        targetBook.shelf = shelf;
        // update component state with mutated object
        this.setState(prevState => ({
          books: prevState.books
            // filter out previous book from books array 
            .filter(book => book.id !== targetBook.id)
            // append mutated value to new books array
            .concat(targetBook)
        }));
      });
  };

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList books={books} shelves={shelves} onBookUpdate={this.onBookUpdate} />} />
        <Route path="/search" render={ () => <SearchPage search={BooksAPI.search} shelves={shelves} onBookUpdate={this.onBookUpdate} /> } />
      </div>
    );
  }
}

export default BooksApp;
