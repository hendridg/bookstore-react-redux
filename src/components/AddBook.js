import React from 'react';
import styled, { css } from 'styled-components';

/* prettier-ignore */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-top: solid 0.125rem #e8e8e8;
  padding-top: 2rem;
  width: 90%;
  ${(props) => props.row && css`
      padding: 0;
      flex-direction: row;
      width: 100%;
    `}
    ${(props) => props.noBorder && css`
        border: none;
    `}
    ${(props) => props.spaceBetween && css`
        justify-content: space-between;
    `}
`;

const Title = styled.p`
  padding: 0;
  color: #888888;
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.18px;
  text-transform: uppercase;
  text-align: left;
`;

const Input = styled.input`
  padding: 1em;
  width: 60%;
`;

const Select = styled.select`
  padding: 1em;
  width: 20%;
`;

const Button = styled.button`
  padding: 0.5rem 3rem;
  color: #fff;
  font-family: RobotoSlab;
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 3px;
  background-color: #0290ff;
`;

const CATEGORIES = ['Action', 'Romance', 'Science Fiction', 'Economy'];

function AddBook() {
  return (
    <Container>
      <Title>Add New Book</Title>
      <Container spaceBetween row noBorder style={{ margin: '0 0 1rem 0' }}>
        <Input type="text" placeholder="Book title" />
        <Select id="categories">
          {CATEGORIES.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </Select>
        <Button type="button">Add Book</Button>
      </Container>
    </Container>
  );
}

export default AddBook;
