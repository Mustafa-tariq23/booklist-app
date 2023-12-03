import React, { useState } from 'react'
import Book from './Book'

const BookList = ({booksData}) => {
  const [selectedGenre, setSelectedGenre] = useState(null)

  const genres = [...new Set(booksData.map(book => book.genre))];

  const filteredBooks = selectedGenre ? booksData.filter(book => book.genre === selectedGenre) : booksData;

  return (
    <div className="book-list-container">
        <h1>Genres</h1>
      <div className='buttons-div'>
      <button onClick={() => setSelectedGenre(null)}>All Genres</button>
      {genres.map(genre => (
        <button key={genre} onClick={() => setSelectedGenre(genre)}>
          {genre}
        </button>
      ))}
      </div>
        <h1>Books</h1>
      <div className="Books">
      {filteredBooks.map(book =>(
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
      </div>
    </div>
  )
}

export default BookList