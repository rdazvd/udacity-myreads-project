import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, shelves, onBookUpdate }) => {
  // add fallback value for missing cover
  const bookCoverValue = 
    book.imageLinks && book.imageLinks.thumbnail
      ? `url(${book.imageLinks.thumbnail})`
      : '#ccc';
  
  // add fallback value for missing title
  const bookTitle = book.title || 'No title available';
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              background: bookCoverValue
            }}
          >
          </div>
          <ShelfChanger 
            book={book}
            shelves={shelves}
            onBookUpdate={onBookUpdate}
          />
        </div>
        <div className="book-title">{bookTitle}</div>
        { /* check for existing author(s) and render if value is provided */
          book.authors && (
            book.authors.map(
              (author, index) => <div key={index} className="book-authors">{ author }</div>
          )) }
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default Book;