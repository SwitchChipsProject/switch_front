import styled from 'styled-components';
import Button from '../../../components/util/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '../../../components/util/Card';
import MatchedRequest from '../../../components/util/MatchedRequest';
import ExchangeRequest from '../../../components/util/ExchangeRequest';
const Container = styled.div<{ isLoggedIn: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.isLoggedIn ? 'flex-start' : 'space-around'};
  width: 100%;
  gap: 15px 0;
`;
const InfoWrapper = styled.div`
  padding: 15px 20px;
  border: 1px solid #eeeeee;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px 0;
`;

const InfoMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InfoText = styled.span`
  color: black;
  font-weight: 600;
  font-size: 20px;
`;

const InfoChangeBtn = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;
const InfoSubContent = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
`;

const InfoDate = styled.span`
  color: #828282;
  font-weight: 600;
  font-size: 13px;
`;

const InfoStatus = styled.div`
  background-color: #d9d9d940;
  padding: 0 10px;
  border-radius: 5px;
  height: 22.5px;
  display: flex;
  align-items: center;
`;

const InfoStatusText = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #b1b1b1;
`;
export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Container isLoggedIn={true}>
      <ExchangeRequest mode="background"></ExchangeRequest>
      <InfoWrapper>
        <InfoMainContent>
          <InfoText>닌텐도 칩 교환요청</InfoText>
          <InfoChangeBtn>상태변경</InfoChangeBtn>
        </InfoMainContent>
        <InfoSubContent>
          <InfoDate>2022년 5월 30일</InfoDate>
          <InfoStatus>
            <InfoStatusText>교환중</InfoStatusText>
          </InfoStatus>
        </InfoSubContent>
      </InfoWrapper>
      <Card title="⭐️ 매칭된 요청" gap={12.5}>
        <>
          <MatchedRequest></MatchedRequest>
          <MatchedRequest></MatchedRequest>
          <MatchedRequest></MatchedRequest>
        </>
      </Card>
      <Card title=" 👯‍♀️️ 마리오 칩을 원하는 유저들" gap={12.5}>
        <>
          <MatchedRequest></MatchedRequest>
          <MatchedRequest></MatchedRequest>
          <MatchedRequest></MatchedRequest>
        </>
      </Card>
      <Button backgroundColor="#FF5D51" textColor="white">
        슈퍼마리오 칩을 원하는 다른 유저들 확인하기
      </Button>
    </Container>
  );
}
