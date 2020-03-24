import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [],
    shelfNames: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        const shelves = [ ...new Set(books.map(book => book.shelf)) ];
        const shelfNames = shelves.map(shelf => 
          shelf
            .replace(/([a-z](?=[A-Z]))/g, '$1 ')
            .replace(
              /\w\S*/g, 
              str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
            )
        );
        
        this.setState({ books, shelves, shelfNames });
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

  // convert camel cased shelf name to multiple-word, title cased string 
  makeShelfName = camelCaseStr => {
    camelCaseStr
      .replace(/([a-z](?=[A-Z]))/g, '$1 ')
      .replace(/\w\S*/g, str =>
        str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
      );
  };

  render() {
    const { books, shelves, shelfNames } = this.state;
    return (
      <div className="app">
        <Route 
          exact path="/" 
          render={ () => (
            <BookList books={books} shelves={shelves} shelfNames={shelfNames} onBookUpdate={this.onBookUpdate} />
          ) }
        />
        <Route 
          path="/search" 
          render={ () => (
            <SearchPage search={BooksAPI.search} shelves={shelves} shelfNames={shelfNames} onBookUpdate={this.onBookUpdate} />
          ) } 
        />
      </div>
    );
  }
}

export default BooksApp;
