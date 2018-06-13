import React, {Component} from 'react';
import ShelfControll from '../shelfcontrol'
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    thumbnail: PropTypes.string.isRequired,
  };


  render() {
    const {book, thumbnail} = this.props;

    return (
        <div className="bookshelf-books">
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                marginLeft: 50,
                backgroundImage: `url(${thumbnail})`
              }}></div>
              <ShelfControll
                  book={book.id}
                  shelf={book.shelf}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
          </div>
        </div>

    );
  }
}

export default Book;
