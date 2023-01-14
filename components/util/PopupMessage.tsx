import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0px 8px 15px #f3f3f3;
  width: 100%;
  border: 1px solid #f3f3f3;
  margin: 30px 0 20px;
`;

const Header = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid #f3f3f3;
  flex-direction: column;
  display: flex;
`;

const HeaderText = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 700;
`;

const Body = styled.div`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;
export default function PopupMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header>
        <HeaderText>유저 이메일 미등록 🙅 </HeaderText>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
}
