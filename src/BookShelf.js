import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ shelfTitle, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ shelfTitle }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
       { books.map(book => <Book book={book} />) }
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;