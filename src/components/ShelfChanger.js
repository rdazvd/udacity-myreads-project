import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = ({ books, book, shelves, shelfNames, onBookUpdate }) => {
  const onUpdateShelf = event => onBookUpdate(book, event.target.value);
  
  const getShelfValue = targetBook => {
    // get array of single item containing book object
    const currentShelfValue = books.filter(book => book.id === targetBook.id);
    
    // if filter got a book object value, return its shelf property
    if (currentShelfValue.length)
     return currentShelfValue[0].shelf;
    
    // if currentShelfValue has no length, return none
    return 'none';
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onUpdateShelf} defaultValue={getShelfValue(book)}>
        <option value="move" disabled>Move to...</option>
        { shelves.map((shelf, i) => (
            <option key={shelf} value={shelf}>{ shelfNames[i] }</option>
        )) }
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  shelves: PropTypes.array.isRequired,
  shelfNames: PropTypes.array.isRequired
};

export default ShelfChanger;