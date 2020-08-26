import React from 'react';
import BookItems from '../BookItems'
import Pagination from 'react-bootstrap/Pagination'
import Table from 'react-bootstrap/Table'

const BooksData = ({booksList}) => {
    const noOfPages = booksList.hasOwnProperty('page') ? booksList.payload.count / 20 : 1
    const totalPages = Math.round(noOfPages)

    let active = parseInt(booksList.page)
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active} href={`/books/${number}`}>
            {number}
          </Pagination.Item>,
        );
      }
    return (
        <div>
            <div>
            <Pagination>{items}</Pagination>
            <br />
            </div>
            {booksList.hasOwnProperty('page') && booksList.payload.books && 
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publication Year</th>
                            <th>Publication Country</th>
                            <th>Publication City</th>
                            <th>Page</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BookItems books={booksList.payload.books}/>
                    </tbody>
                </Table>
            </div>
            }
        </div>
    )
};

export default BooksData;