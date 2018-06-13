import React from 'react'
import {Route} from 'react-router-dom';
import './App.css'
import Shelves from './components/shelves'
import SearchBook from './components/searchbook';
import * as BooksAPI from "./BooksAPI";


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }


  render() {
    return (
        <div className="app">
          <Route exact path="/" render={() => (
              <Shelves books={this.state.books}/>
          )}
          />
          <Route exact path="/search" render={() => (
              <SearchBook shelfBooks={this.state.books}/>
          )}
          />
        </div>
    )
  }
}

export default BooksApp
