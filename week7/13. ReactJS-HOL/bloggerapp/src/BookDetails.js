import React from 'react';

const BookDetails = ({ books }) => {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id}>
          <strong>{book.title}</strong>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
