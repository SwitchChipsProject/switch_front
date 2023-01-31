import styled from 'styled-components';
import Card from '../components/util/Card';
import Button from '../components/util/Button';
import { useCallback, useEffect, useRef, useState } from 'react';
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px 0;
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

  ::placeholder {
    color: #b3b3b3;
  }
`;

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const target = useRef<HTMLInputElement>(null);

  const onChangeEmail = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setEmail(value);
    },
    []
  );

  const onChangePassword = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setPassword(value);
    },
    []
  );

  const onClickButton = useCallback(() => {
    alert('로그인 되었습니다.');
  }, []);

  useEffect(() => {
    setDisabled(email.length === 0 || password.length === 0);
  }, [email, password]);
  return (
    <Container>
      <Card subTitle="Login" title="로그인" gap={30}>
        <>
          <InputWrapper>
            <InputLabel>이메일 (아이디)</InputLabel>
            <Input
              placeholder="이메일 주소를 입력해주세요."
              onChange={onChangeEmail}
              value={email}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  (target.current as HTMLInputElement).focus();
                }
              }}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>비밀번호</InputLabel>
            <Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={onChangePassword}
              ref={target}
            ></Input>
          </InputWrapper>
          <Button
            backgroundColor={disabled ? '#ff5d514d' : '#FF5D51'}
            textColor="white"
            onClick={onClickButton}
            disabled={disabled}
          >
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
