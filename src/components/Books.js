import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import CardBook from './CardBook';
import { selectBooks } from '../redux/books/books';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Books() {
  const books = useSelector(selectBooks);
  return (
    <Container>
      {books.length ? (
        books.map((book) => (
          <CardBook
            key={book.id}
            id={book.id}
            title={book.title}
            author="Suzanne Collins"
            category={book.category}
          />
        ))
      ) : (
        <h1>Add new Book!</h1>
      )}

      <AddBook />
    </Container>
  );
}

export default Books;
