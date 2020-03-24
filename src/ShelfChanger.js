import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = ({ book, shelves, shelfNames, onBookUpdate }) => {
  const onUpdateShelf = event => onBookUpdate(book, event.target.value);
  
  return (
    <div className="book-shelf-changer">
      <select onChange={onUpdateShelf} defaultValue={book.shelf}>
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