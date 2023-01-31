import styled from 'styled-components';
import Card from '../components/util/Card';
import Button from '../components/util/Button';
import DaumPostcodeEmbed from 'react-daum-postcode';
import styles from '../styles/page/enroll.module.scss';
import { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
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

const Input = styled.input<{ status: 'pass' | 'not-pass' | 'init' }>`
  padding: 12.5px 15px;
  border: ${(props) =>
    props.status === 'pass' || props.status === 'init'
      ? '1px solid #f3f3f3;'
      : '1px solid red'};
  border-radius: 10px;
  background-color: white;
  color: black;
  outline: none;
  ::placeholder {
    color: #b3b3b3;
  }
`;

const Strong = styled.strong`
  color: red;
`;

const LocationButton = styled.button<{ isThereLocation: boolean }>`
  padding: 12.5px 15px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background-color: white;
  outline: none;
  text-align: start;
  color: ${(props) => (props.isThereLocation ? 'black' : '#b3b3b3')};
  cursor: pointer;
`;

export default function Register() {
  const router = useRouter();

  const popup = useRef<HTMLInputElement>(null);
  const inputs = useRef<HTMLInputElement[] | null[]>([null]);

  const [visibility, setVisibility] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const [emailInit, setEmailInit] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [passwordInit, setPasswordInit] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const [passwordCheckInit, setPasswordCheckInit] = useState<boolean>(true);
  const [passwordCheckValid, setPasswordCheckValid] = useState<boolean>(false);

  const [nicknameInit, setNicknameInit] = useState<boolean>(true);
  const [nicknameValid, setNicknameValid] = useState<boolean>(false);

  const [disabled, setDisabled] = useState<boolean>(true);

  const onClickPopup = useCallback((event: any) => {
    if (event.target.id.includes('popup')) {
      setVisibility(false);
    }
  }, []);

  const onChangeEmail = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setEmailInit(false);
      setEmail(value);
    },
    []
  );

  const onChangePassword = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setPasswordInit(false);
      setPassword(value);
    },
    []
  );

  const onChangePasswordCheck = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setPasswordCheckInit(false);
      setPasswordCheck(value);
    },
    []
  );

  const onChangeNickname = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setNicknameInit(false);
      setNickname(value);
    },
    []
  );

  const onClickButton = useCallback(() => {
    router.replace('/');
  }, []);

  useEffect(() => {
    const emailRule =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setEmailValid(emailRule.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    setPasswordValid(passwordRule.test(password));
  }, [password]);

  useEffect(() => {
    setPasswordCheckValid(password === passwordCheck);
  }, [password, passwordCheck]);

  useEffect(() => {
    setNicknameValid(nickname.length !== 0 && nickname.length < 10);
  }, [nickname]);

  useEffect(() => {
    setDisabled(
      !(
        emailValid &&
        passwordValid &&
        passwordCheckValid &&
        nicknameValid &&
        location.length !== 0
      )
    );
  }, [emailValid, passwordValid, passwordCheckValid, nicknameValid, location]);

  const onComplete = useCallback(async (data: any) => {
    setLocation(data.roadAddress);
    const REST_API_KEY = 'c35e971551c57ac4a7a7eec7ac97fc34';
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.JSON?query=${data.roadAddress}`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );
    setVisibility(false);
    setLatitude(res.data.documents[0].y);
    setLongitude(res.data.documents[0].x);
  }, []);

  const onClicked = useCallback(() => {
    setVisibility(true);
  }, []);

  return (
    <Container>
      <Card subTitle="Register" title="회원가입" gap={30}>
        <>
          <InputWrapper>
            <InputLabel>
              이메일 (아이디)<Strong>*</Strong>
            </InputLabel>
            <Input
              placeholder="이메일 주소를 입력해주세요."
              autoComplete="new-password"
              onChange={onChangeEmail}
              value={email}
              status={emailInit ? 'init' : emailValid ? 'pass' : 'not-pass'}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  (inputs.current[0] as HTMLInputElement).focus();
                }
              }}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              비밀번호 (8자 이상)<Strong>*</Strong>
            </InputLabel>
            <Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              autoComplete="new-password"
              onChange={onChangePassword}
              value={password}
              status={
                passwordInit ? 'init' : passwordValid ? 'pass' : 'not-pass'
              }
              ref={(el) => (inputs.current[0] = el)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  (inputs.current[1] as HTMLInputElement).focus();
                }
              }}
            ></Input>
            <Input
              placeholder="다시한번 비밀번호를 입력해주세요."
              type="password"
              onChange={onChangePasswordCheck}
              value={passwordCheck}
              status={
                passwordCheckInit
                  ? 'init'
                  : passwordCheckValid
                  ? 'pass'
                  : 'not-pass'
              }
              ref={(el) => (inputs.current[1] = el)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  (inputs.current[2] as HTMLInputElement).focus();
                }
              }}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              닉네임<Strong>*</Strong>
            </InputLabel>
            <Input
              placeholder="닉네임을 입력해주세요."
              onChange={onChangeNickname}
              value={nickname}
              status={
                nicknameInit ? 'init' : nicknameValid ? 'pass' : 'not-pass'
              }
              ref={(el) => (inputs.current[2] = el)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setVisibility(true);
                }
              }}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              위치정보<Strong>*</Strong>
            </InputLabel>
            <LocationButton
              onClick={onClicked}
              isThereLocation={location.length !== 0}
            >
              {location.length === 0 ? '위치정보 검색하기' : location}
            </LocationButton>
          </InputWrapper>
          <Button
            backgroundColor={disabled ? '#ff5d514d' : '#FF5D51'}
            textColor="white"
            disabled={disabled}
            onClick={onClickButton}
          >
            회원가입
          </Button>
        </>
      </Card>

      {visibility ? (
        <div id={styles.popup} ref={popup} onClick={onClickPopup}>
          <DaumPostcodeEmbed style={{ width: 450 }} onComplete={onComplete} />
        </div>
      ) : null}
    </Container>
  );
}
