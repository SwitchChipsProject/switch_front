import styled from 'styled-components';
import InputContainer from '../components/util/InputContainer';
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
  padding: 12.5px 15px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background-color: white;
  color: black;
  outline: none;
`;

const Strong = styled.strong`
  color: red;
`;

const LocationButton = styled.button`
  padding: 12.5px 15px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background-color: white;
  color: black;
  outline: none;
  text-align: start;
  color: #828282;
  cursor: pointer;
`;

export default function Register() {
  return (
    <Container>
      <InputContainer type="Register">
        <>
          <InputWrapper>
            <InputLabel>
              이메일 (아이디)<Strong>*</Strong>
            </InputLabel>
            <Input placeholder="아이디"></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              비밀번호 (8자 이상)<Strong>*</Strong>
            </InputLabel>
            <Input placeholder="비밀번호" type="password"></Input>
            <Input placeholder="비밀번호" type="password"></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              닉네임<Strong>*</Strong>
            </InputLabel>
            <Input placeholder="비밀번호"></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              위치정보<Strong>*</Strong>
            </InputLabel>
            <LocationButton>위치정보 찾아보기</LocationButton>
          </InputWrapper>
          <Button backgroundColor={'#FF5D51'} textColor="white">
            회원가입
          </Button>
        </>
      </InputContainer>
    </Container>
  );
}
