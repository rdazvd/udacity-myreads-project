import React from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelfChanger';

const Book = ({ book, shelves }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div 
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        >
        </div>
        <ShelfChanger shelves={shelves} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;