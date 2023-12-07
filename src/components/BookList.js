// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/books?page=${page}`);
      const newBooks = response.data.books;

      setBooks((prevBooks) => [...prevBooks, ...newBooks]);
      setPage(page + 1);

      if (newBooks.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={books.length}
      next={fetchBooks}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more books to load</p>}
      scrollThreshold={0.8} // 80% of the floor
    >
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default BookList;
