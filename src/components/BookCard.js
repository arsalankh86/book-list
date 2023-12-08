import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.cover_image_url} alt={book.title} />
      <div className="card-info">
        <h3>{book.title}</h3>
        <p>Writer: {book.writer}</p>
        <p>Price: ${book.point}</p>
        <p>Tag: {book.tag_name}</p>
      </div>
    </div>
  );
};

export default BookCard;
