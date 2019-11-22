import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import '../styles/index.css';

export default () => (
  <Container>
    <Main>
      <Title>Hello world!</Title>
    </Main>
    <Footer />
  </Container>
);

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  text-align: center;
  flex-grow: 1;
  background-color: #6f009c;
  color: #ffffff;
  font-family: Verdana, Geneva, sans-serif;
`;

const Title = styled.h1`
  margin: calc(50vh / 4) 0;
  position: relative;

  &::before {
    font-family: 'Font Awesome 5 Free';
    content: '\f70c';
    font-weight: 900;
    width: 50px;
    position: absolute;
    top: 115%;
    left: 50%;
    margin-left: -25px;
  }

  @media (max-height: 635px) {
    margin: 50px 0;
  }

  @media (max-height: 545px) {
    margin: 10px 0 50px 0;
  }
`;
