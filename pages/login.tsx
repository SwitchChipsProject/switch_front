import styled from 'styled-components';
import Card from '../components/util/Card';
import Button from '../components/util/Button';
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12.5px 0;
`;

const InputLabel = styled.span`
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background-color: white;
  color: black;
  outline: none;
  /* ::placeholder {
    color: black;
  } */
`;

const Strong = styled.strong`
  color: red;
`;

export default function Login() {
  return (
    <Container>
      <Card subTitle="Login" title="로그인" gap={30}>
        <>
          <InputWrapper>
            <InputLabel>이메일 (아이디)</InputLabel>
            <Input placeholder="아이디"></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>비밀번호</InputLabel>
            <Input placeholder="비밀번호" type="password"></Input>
          </InputWrapper>
          <Button backgroundColor="#FF5D51" textColor="white">
            로그인
          </Button>
        </>
      </Card>
      <Button textColor="black" backgroundColor="#FAE100">
        카카오 로그인
      </Button>
    </Container>
  );
}
