import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCardBook = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  width: 90%;
  max-width: 75rem;
  height: 10.625rem;
  background-color: #fff;
  margin-top: 1rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
`;
/* prettier-ignore */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;  
  ${(props) => props.row && css`
      flex-direction: row;
      align-items: center;
    `}
    ${(props) => props.justifyCenter && css`
      justify-content: space-around;
    `}
`;
/* prettier-ignore */
const LightFont = styled.h3`
  margin: 0;
  opacity: 0.5;
  font-family: 'Montserrat';
  font-size: 0.875rem;
  font-weight: normal;
  color: #121212;
  ${(props) => props.bold && css`
      font-weight: bold;
    `}
`;

const Title = styled.p`
  margin: 0;
  color: #121212;
  font-family: RobotoSlab;
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.2px;
`;

const Author = styled.p`
  margin: 0;
  color: #4386bf;
  letter-spacing: -0.2px;
  font-family: 'RobotoSlab';
  font-size: 0.875rem;
  font-weight: 300;
`;
/* prettier-ignore */
const Button = styled.button`
  padding: 0;
  margin-right: 0.8rem;
  border: none;
  color: #4386bf;
  background-color: #fff;
  font-family: 'RobotoSlab';
  font-size: 0.875rem;
  font-weight: 300;
  cursor: pointer;
  ${(props) => props.primary && css`
      padding: 0.5rem 1.3rem;
      border-radius: 3px;
      font-weight: bold;
      color: #fff;
      font-size: 0.813rem;
      font-weight: 300;
      background-color: #0290ff;
    `}
`;

const Spinner = styled.div`
  margin-right: 1rem;
  width: 4.25rem;
  height: 4.25rem;
  border: 5px solid #307bbe;
  border-bottom: 5px solid #e8e8e8;
  border-radius: 50%;
`;

const CardBook = (props) => {
  const { categorie, author, title } = props;
  return (
    <WrapperCardBook>
      <Container>
        <div style={{ textAlign: 'left' }}>
          <LightFont bold>{categorie}</LightFont>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </div>
        <div>
          <Button>Comments</Button>
          <Button>Remove</Button>
          <Button>Edit</Button>
        </div>
      </Container>
      <Container row>
        <Container row>
          <Spinner />
          <Container justifyCenter>
            <h2 style={{ margin: 0 }}>64%</h2>
            <LightFont style={{ margin: 0 }}>Completed</LightFont>
          </Container>
        </Container>
        <Container style={{ marginLeft: '1rem' }}>
          <LightFont>CURRENT CHAPTER</LightFont>
          <h3 style={{ margin: '0 0 1rem 0' }}>Chapter 17</h3>
          <Button primary>UPDATE PROGRESS</Button>
        </Container>
      </Container>
    </WrapperCardBook>
  );
};

CardBook.propTypes = {
  categorie: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default CardBook;
