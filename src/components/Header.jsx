import React, { useContext } from 'react';
import Image from 'next/image';
import ProfileImg from '@assets/profileimg.png';
import AppContext from '@context/AppContext';
import Tags from '@components/Tags';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={`${state.tagsActives[0] != undefined ? `${styles.minimized}` : `${styles.Header}`}`}>
      <h1 className={styles['header-title']}>Hello, Im Jayder Caceres</h1>
      <h2 className={styles['header-description']}>Full-Stack Developer with Javascript</h2>
      <div className={styles['img-container']}>
        <Image src={ProfileImg} className={styles['header-img']} layout="fill" alt="profile-image" />
      </div>
      <div className={styles['tags-container']}>
        <Tags name="Portfolio" id="tagA" className={styles.tags} />
        <Tags name="Abilities" id="tagB" className={styles.tags} />
        <div></div>
        <Tags name="About Me" id="tagC" className={styles.tags} />
        <Tags name="Contacts" id="tagD" className={styles.tags} />
      </div>
    </div>
  );
};
export default Header;
