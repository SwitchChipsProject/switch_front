import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #eeeeee;
  box-shadow: 0px 8px 15px #eeeeee;

  display: flex;
  justify-content: space-between;
  gap: 0 10px;
  box-sizing: content-box;
`;

const ImgSection = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: url('http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/080/661/354/80661354_1607326173594_9_600x600.JPG');
  background-size: contain;
  border: 1px solid #eeeeee;
`;
const InfoSection = styled.div`
  display: flex;
  padding-top: 2.5px;
  flex-direction: column;
  box-sizing: content-box;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 150px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;
`;

const InfoMainText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
const InfoSubText = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #969696;
`;
const ButtonSection = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoStatus = styled.div`
  background-color: #33ff002a;
  border-radius: 10px;
  padding: 0 12.5px;
  height: 25px;
  display: flex;
  align-items: center;
`;
const InfoStatusText = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #0cc762;
`;

const InfoChip = styled.div`
  background-color: #eeeeee81;
  border-radius: 10px;
  padding: 0 12.5px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
`;

const InfoChipImg = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background: url('http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/080/661/354/80661354_1607326173594_9_600x600.JPG');
  background-size: contain;
  border: 1px solid #eeeeee;
`;

const InfoChipText = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: black;
`;

const ChatButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;
export default function MatchedRequest() {
  return (
    <Container>
      <ImgSection></ImgSection>
      <InfoSection>
        <InfoWrapper>
          <InfoMainText>조유리</InfoMainText>
          <InfoSubText>경기도 평택시</InfoSubText>
        </InfoWrapper>
        <InfoWrapper style={{ marginTop: 5 }}>
          <InfoStatus>
            <InfoStatusText>거리 6km</InfoStatusText>
          </InfoStatus>
          <InfoStatus>
            <InfoStatusText>응답률 100%</InfoStatusText>
          </InfoStatus>
          <InfoChip>
            <InfoChipImg></InfoChipImg>
            <InfoChipText>포켓몬 칩</InfoChipText>
          </InfoChip>
        </InfoWrapper>
      </InfoSection>
      <ButtonSection>
        <ChatButton>💬</ChatButton>
      </ButtonSection>
    </Container>
  );
}
