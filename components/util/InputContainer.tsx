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
  gap: 5px 0;
`;

const HeaderText = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 700;
`;

const HeaderSubText = styled.span`
  font-size: 12px;
  color: #828282;
  font-weight: 400;
`;

const Body = styled.div`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export default function InputContainer({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'Login' | 'Register';
}) {
  return (
    <Container>
      <Header>
        <HeaderSubText>{type}</HeaderSubText>
        <HeaderText>{type === 'Login' ? '로그인' : '회원가입'}</HeaderText>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
}
