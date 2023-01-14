import styled from 'styled-components';
import PopupMessage from '../components/util/PopupMessage';
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MessageText = styled.span`
  color: black;
  font-size: 15px;
`;

const EmailText = styled.span`
  color: #51abff;
  font-size: 15px;
`;

export default function UnRegistered() {
  return (
    <Container>
      <PopupMessage>
        <>
          <EmailText>bsy17171@naver.com</EmailText>
          <MessageText>
            등록한 이메일의 인증이 진행되지 않았습니다.
            <br></br> 인증을 진행해주세요.
          </MessageText>
        </>
      </PopupMessage>
    </Container>
  );
}
