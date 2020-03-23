import React from 'react';
import PropTypes from 'prop-types';

// convert camel cased shelf name to multiple-word, title cased string 
const makeShelfName = camelCaseStr =>
  camelCaseStr
    .replace(/([a-z](?=[A-Z]))/g, '$1 ')
    .replace(/\w\S*/g, str =>
      str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    );

const ShelfChanger = ({ book, shelves, onBookUpdate }) => {
  const onUpdateShelf = event => onBookUpdate(book, event.target.value);
  
  return (
    <div className="book-shelf-changer">
      <select onChange={onUpdateShelf} defaultValue={book.shelf}>
        <option value="move" disabled>Move to...</option>
        { shelves.map(shelf => (
            <option key={shelf} value={shelf}>{ makeShelfName(shelf) }</option>
        )) }
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  shelves: PropTypes.array.isRequired
};

export default ShelfChanger;