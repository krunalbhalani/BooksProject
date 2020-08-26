import React from 'react'

const BookItems = ({books}) => {
      return books.map(book => (
            <tr>
                <td>{book.id}</td>
                <td>{book.book_title}</td>
                <td>{book.book_author[0]}</td>
                <td>{book.book_publication_year}</td>
                <td>{book.book_publication_country}</td>
                <td>{book.book_publication_city}</td>
                <td>{book.book_pages}</td>
            </tr>
      ));
   };

  export default BookItems;
  