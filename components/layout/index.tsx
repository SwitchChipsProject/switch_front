import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  justify-content: center;
  display: flex;
`;

const Content = styled.div`
  min-width: 450px;
  min-height: 100vh;
  background-color: white;
  padding: 0 30px;
  display: flex;
  justify-content: center;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
