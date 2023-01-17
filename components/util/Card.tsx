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

const Body = styled.div<{ gap: number }>`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props.gap}px 0`};
`;

export default function Card({
  children,
  subTitle,
  title,
  gap,
}: {
  children: React.ReactNode;
  subTitle: string;
  title: string;
  gap: number;
}) {
  return (
    <Container>
      <Header>
        <HeaderSubText>{subTitle}</HeaderSubText>
        <HeaderText>{title}</HeaderText>
      </Header>
      <Body gap={gap}>{children}</Body>
    </Container>
  );
}
