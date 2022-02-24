import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import CardBook from './CardBook';
import { selectBooks, getApi } from '../redux/books/books';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Books() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi);
  }, []);
  return (
    <Container>
      {books ? (
        Object.keys(books).map((book) => (
          <CardBook
            key={book}
            id={book}
            title={books[book][0].title}
            author="Suzanne Collins"
            category={books[book][0].category}
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
