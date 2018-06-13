import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookList from '../booklist';


class Shelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MY READS</h1>
        </div>
          <div className="list-books-content">
          <BookList
            shelfTitle={"Currently Reading"}
            shelf={"currentlyReading"}
            books={books}
          />
          <BookList
            shelfTitle={"Want To Read"}
            shelf={"wantToRead"}
            books={books}
          />
          <BookList
            shelfTitle={"Read Done"}
            shelf={"read"}
            books={books}
          />
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Shelves
