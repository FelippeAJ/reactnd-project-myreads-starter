import React, {Component} from 'react';
import * as BooksAPI from '../../BooksAPI';
import PropTypes from "prop-types";


class ShelfControll extends Component {
  static propTypes = {
    book: PropTypes.string.isRequired,
    shelf: PropTypes.string,
  };

  changeShelf(shelfChoosed) {
    BooksAPI.update(this.props.book, shelfChoosed);
  }

  render() {
    const {shelf} = this.props;

    return (
        <div className="book-shelf-changer">
          <select
              value={shelf || "none"}
              onChange={(ev) => {
                this.changeShelf(ev.target.value)
              }}
          >
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    );
  }
}

export default ShelfControll
