import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ shelfTitle, books, shelves, shelfNames, onBookUpdate }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ shelfTitle }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
       { books.map(book => 
           <Book 
             key={book.id} 
             book={book} 
             shelves={shelves}
             shelfNames={shelfNames}
             onBookUpdate={onBookUpdate}
           />
       ) }
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  shelfNames: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default BookShelf;