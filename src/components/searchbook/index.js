import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from "../../BooksAPI";
import Book from "../book";


class SearchBook extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
    }
  }

  showResults(response) {
    const {shelfBooks} = this.props

    if (response) {
      return (
          <div className="bookshelf-books">
            <ol className="books-grid">
              {response.map(book => {
                let indexShelfBook = shelfBooks.findIndex(shelfBook => shelfBook.id === book.id)
                let bookResult = indexShelfBook === -1 ? book : shelfBooks[indexShelfBook]
                return (
                    <li key={book.id}>
                      <Book
                          book={bookResult}
                          thumbnail={book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x192"}
                      />
                    </li>
                )
              })}
            </ol>
          </div>
      )
    }
  }

  onChangeQuery = (ev) => {
    this.setState({query: ev.target.value.trim()})

    BooksAPI.search(this.state.query).then(response => {
      this.setState({results: response})
    })

  }

  render() {
    const {query} = this.state

    return (
        <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder={'Search by title or author'}
                    value={query}
                    onChange={(ev) => this.onChangeQuery(ev)}
                />
              </div>

            </div>
          </div>
          <div style={{marginTop: "120px"}}>
            {this.showResults(this.state.results)}
          </div>
        </div>
    );
  }
}

export default SearchBook
