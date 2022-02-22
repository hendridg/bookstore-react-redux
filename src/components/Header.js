import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  padding: 0 3rem;
  border-bottom: solid 0.125rem #e8e8e8;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 82rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: #121212;
  margin-left: 1rem;
  font-family: Montserrat;
  font-size: 0.813rem;
  text-transform: uppercase;
  letter-spacing: 1.9px;
`;

const Title = styled.h1`
  color: #0290ff;
  font-size: 1.875rem;
`;

function Header() {
  return (
    <WrapperHeader>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Title>Bookstore CMS</Title>
          <ul>
            <LinkTo to="/">Books</LinkTo>
            <LinkTo to="/categories">Categories</LinkTo>
          </ul>
        </div>
        <UserIcon />
      </Container>
    </WrapperHeader>
  );
}

function UserIcon() {
  return (
    <div
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: '50%',
        padding: '0.85rem',
      }}
    >
      <img
        src="/assets/user-solid.svg"
        alt="user icon"
        style={{ width: '1rem', height: '1rem', color: '#0290ff' }}
      />
    </div>
  );
}

export default Header;
