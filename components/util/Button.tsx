import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const Container = styled.button<{ color: string }>`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 10px;
  border: none;
`;

const Content = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 20px;
`;

export default function Button({
  backgroundColor,
  textColor,
  children,
  onClick,
}: {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Container color={backgroundColor} onClick={onClick}>
      <Content color={textColor}>{children}</Content>
    </Container>
  );
}
