import { useEffect } from 'react';
import styles from '../../styles/components/Header.module.scss';
import { BsFillChatLeftFill, BsBellFill } from 'react-icons/bs';

export default function Header({ display }: { display: boolean }) {
  return (
    <div id={styles.wrapper}>
      <div
        id={styles.container}
        className={display ? styles.display : styles.notDisplay}
      >
        <button id={styles.userImage}></button>
        <button id={styles.logoImage}></button>
        <div id={styles.menu}>
          <button className={styles.button}>
            <span className={styles.status}></span>
            <BsBellFill color="#00BBDF" size={18}></BsBellFill>
          </button>
          <span className={styles.division}></span>
          <button className={styles.button}>
            <span className={styles.status}></span>

            <BsFillChatLeftFill color="#00BBDF" size={17}></BsFillChatLeftFill>
          </button>
        </div>
      </div>
    </div>
  );
}
