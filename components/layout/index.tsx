import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import Header from '../util/Header';
const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  justify-content: center;
  display: flex;
`;

const ContentsWrapper = styled.div`
  min-width: 450px;
  min-height: 100%;
  background-color: white;
`;

const Contents = styled.div`
  background-color: white;
  padding: 0px 30px 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 20px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [display, setDisplay] = useState<boolean>(true);
  const [movement, setMovement] = useState<boolean>(true);

  const listener = useCallback((e: Event) => {
    if (window.scrollY > 100) {
      setMovement(false);
    } else {
      setMovement(true);
    }
  }, []);

  useEffect(() => {
    if (router.pathname === '/') {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener('scroll', listener, false);
    return () => window.removeEventListener('scroll', listener);
  }, [listener]);

  return (
    <Container>
      <ContentsWrapper>
        <Header display={movement}></Header>
        <Contents>{children}</Contents>
      </ContentsWrapper>
    </Container>
  );
}
