import styled from 'styled-components';
import Button from '../components/util/Button';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Title = styled.span`
  font-size: 32.5px;
  font-weight: 700;
  color: black;
`;

const Image = styled.img`
  width: 70%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px 0;
  width: 100%;
  flex-direction: column;
`;
export default function Home() {
  return (
    <Container>
      <Title>
        닌텐도 칩을 <br />
        바꿔보세요.
      </Title>
      <Image src="/homeImage.png" alt="home image"></Image>
      <ButtonsWrapper>
        <Button backgroundColor={'#FF5D51'} textColor="white">
          로그인
        </Button>
        <Button backgroundColor={'black'} textColor="white">
          회원가입
        </Button>
      </ButtonsWrapper>
    </Container>
  );
}
