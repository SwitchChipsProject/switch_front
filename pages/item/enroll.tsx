import Button from '../../components/util/Button';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/util/Card';
import styles from '../../styles/page/enroll.module.scss';
import { RiFileAddFill } from 'react-icons/ri';
import { CgArrowsExchange } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const target = useRef<any>();
  const [visibility, setVisibility] = useState<boolean>(false);

  const onClickPopup = useCallback((event: any) => {
    if (event.target.id.includes('popup')) {
      setVisibility(false);
    }
  }, []);

  const onClickCard = useCallback(() => {
    setVisibility(true);
    console.log('click');
  }, []);

  return (
    <>
      <div id={styles.container}>
        <Card
          title="스위치 칩 교환 등록"
          subTitle="Enroll your Exchange"
          gap={12.5}
        >
          <div id={styles.contents}>
            <button className={styles.chipCard} onClick={onClickCard}>
              <RiFileAddFill color="black" size={40}></RiFileAddFill>
              <span className={styles.text}>나의 카드</span>
            </button>
            <div id={styles.iconWrapper}>
              <CgArrowsExchange size={25}></CgArrowsExchange>
            </div>
            <button className={styles.chipCard} onClick={onClickCard}>
              <RiFileAddFill color="black" size={40}></RiFileAddFill>
              <span className={styles.text}>원하는 카드</span>
            </button>
          </div>
        </Card>

        <Button backgroundColor="#FF5D51" textColor="white">
          등록하기
        </Button>
      </div>
      {visibility ? (
        <div id={styles.popup} ref={target} onClick={onClickPopup}>
          <div id={styles.container}>
            <div id={styles.searchBar}>
              <BiSearch color="#A1A1A1" size={25}></BiSearch>
              <input type="text" id={styles.input} autoFocus />
            </div>
            <div id={styles.division}></div>
            <div id={styles.searchResults}>
              <button className={styles.chipCard}>
                <div className={styles.img}></div>
                <span className={styles.text}>마리오</span>
              </button>
              <button className={styles.chipCard}>
                <div className={styles.img}></div>
                <span className={styles.text}>마리오</span>
              </button>
              <button className={styles.chipCard}>
                <div className={styles.img}></div>
                <span className={styles.text}>마리오</span>
              </button>
              <button className={styles.chipCard}>
                <div className={styles.img}></div>
                <span className={styles.text}>마리오</span>
              </button>
              <button className={styles.chipCard}>
                <div className={styles.img}></div>
                <span className={styles.text}>마리오</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
