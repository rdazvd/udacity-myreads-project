import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = ({ books }) => {
  const shelves = [ ...new Set(books.map(book => book.shelf)) ];
  const booksByShelf = shelves.map(shelf => books.filter(book => book.shelf === shelf));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
        { booksByShelf.map((shelf, shelfTitle) =>
            <BookShelf shelfTitle={shelves[shelfTitle]} books={shelf} />) }
      </div>
      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;