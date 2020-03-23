import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

const BookList = ({ books, shelves }) => {
  const booksByShelf = shelves.map(shelf => books.filter(book => book.shelf === shelf));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        { booksByShelf.map((shelf, shelfTitle) =>
            <BookShelf
              key={shelves[shelfTitle]}
              shelfTitle={shelves[shelfTitle]} 
              books={shelf}
              shelves={shelves}
            />
        ) }
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;