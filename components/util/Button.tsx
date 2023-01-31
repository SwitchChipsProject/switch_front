import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const Container = styled.button<{ color: string; disabled: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.color};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
  border-radius: 10px;
  border: none;
`;

const Content = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 18px;
`;

export default function Button({
  backgroundColor,
  textColor,
  children,
  onClick,
  disabled,
}: {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Container color={backgroundColor} onClick={onClick} disabled={disabled}>
      <Content color={textColor}>{children}</Content>
    </Container>
  );
}
