import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from '../book';


class BookList extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const {books, shelf, shelfTitle} = this.props

    return (
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title"> {shelfTitle}</h2>

            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter(book => book.shelf === shelf).map(book => (
                    <li key={book.id}>
                      <Book
                          book={book}
                          thumbnail={book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x192"}
                      />
                    </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
    );
  }
}

export default BookList
