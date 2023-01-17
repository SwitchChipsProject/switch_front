import { url } from 'inspector';
import styled from 'styled-components';
import { CgArrowsExchange } from 'react-icons/cg';

const Container = styled.button`
  height: 90px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px #f3f3f3;
  display: flex;
  border: 1px solid #f3f3f3;
  position: relative;
  background: transparent;
  cursor: pointer;
  transition: all 250ms ease;
  :hover {
    transform: translateY(-3px);
  }
`;

const Section = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const SectionInstance = styled.div<{ isItLeft: boolean; url: string }>`
  flex: 1;
  background: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: ${(props) => (props.isItLeft ? '10px' : 0)};
  border-bottom-left-radius: ${(props) => (props.isItLeft ? '10px' : 0)};
  border-top-right-radius: ${(props) => (!props.isItLeft ? '10px' : 0)};
  border-bottom-right-radius: ${(props) => (!props.isItLeft ? '10px' : 0)};
  display: flex;
  align-items: center;
`;
const SectionBar = styled.div`
  width: 1px;
  height: 100%;
  background-color: #f3f3f3;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 7.5px;
`;

const InfoImage = styled.div<{ url: string }>`
  background: ${(props) => `url(${props.url})`};
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  border: 1px solid white;
`;

const InfoName = styled.div`
  height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid #f3f3f3;
`;

const InfoNameText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: black;
`;

const ContainerForChange = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChangeIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ff5d51;
  box-shadow: 0px 0px 15px #bbbbbb;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ExchangeRequest() {
  return (
    <Container>
      <Section>
        <SectionInstance
          isItLeft={true}
          url="https://img.danawa.com/prod_img/500000/676/350/img/7350676_1.jpg?shrink=500:500&_v=20220105134557"
        >
          <InfoWrapper>
            <InfoImage url="https://cdn.thankyounews.co.kr/news/photo/202206/303339_302854_3220.jpg"></InfoImage>
            <InfoName>
              <InfoNameText>마리오 칩</InfoNameText>
            </InfoName>
          </InfoWrapper>
        </SectionInstance>
      </Section>
      <SectionBar></SectionBar>
      <Section>
        <SectionInstance
          isItLeft={false}
          url="https://sitem.ssgcdn.com/95/94/76/item/1000036769495_i1_1100.jpg"
        >
          <InfoWrapper>
            <InfoImage url="http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/080/661/354/80661354_1607326173594_9_600x600.JPG"></InfoImage>
            <InfoName>
              <InfoNameText>포케케몬 칩</InfoNameText>
            </InfoName>
          </InfoWrapper>
        </SectionInstance>
      </Section>
      <ContainerForChange>
        <ChangeIconWrapper>
          <CgArrowsExchange size={20}></CgArrowsExchange>
        </ChangeIconWrapper>
      </ContainerForChange>
    </Container>
  );
}
