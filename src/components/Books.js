import React from 'react';
import styled from 'styled-components';
import AddBook from './AddBook';
import CardBook from './CardBook';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Books() {
  return (
    <Container>
      <CardBook
        title="The Hunger Games"
        author="Suzanne Collins"
        categorie="Action"
      />
      <CardBook
        title="Dune"
        author="Frank Herbert"
        categorie="Science Fiction"
      />
      <CardBook
        title="Capital in the Twenty-First Century"
        author="Suzanne Collins"
        categorie="Economy"
      />
      <AddBook />
    </Container>
  );
}

export default Books;
