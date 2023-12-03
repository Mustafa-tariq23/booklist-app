import '../App.css';
import React from 'react'

const Book = ({title, author, description}) => {
  return (
    <div className="book-container">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Book