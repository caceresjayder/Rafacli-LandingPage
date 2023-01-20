import React from 'react';
import Image from 'next/image';
import ReactImg from '@assets/reactjs.png';
import NextImg from '@assets/nextjs.png';
import SassImg from '@assets/sass.png';
import CssImg from '@assets/css.png';
import TailwindcssImg from '@assets/tailwindcss.png';
import JavaScript from '@assets/javascript.png';
import Gear from '@assets/gear.png';
import NodejsImg from '@assets/nodejs.png';
import Python from '@assets/python.png';
import JWTImg from '@assets/jwt.png';
import ExpressImg from '@assets/expresjs.png';
import MysqlImg from '@assets/mysql.png';
import MongoImg from '@assets/mongodb.png';
import PostgresImg from '@assets/postgresql.png';
import FastApiImg from '@assets/fastapi.png';
import GitImg from '@assets/git.png'
import LinuxImg from '@assets/linux.png'
import AzureImg from '@assets/azure.png'
import Github from '@assets/github.png'
import WindowsImg from '@assets/windows.png'
import JestImg from '@assets/jest.png'
import MacImg from  '@assets/mac.png'
import styles from '@styles/Abilities.module.scss';

export default function Abilities() {
  return (
    <div className={styles.abilities}>
      <div className={styles['abilities-container']}>
        <div className={styles['frontend-container']}>
          <div className={styles['frontend-draw']}>
            <div className={styles['draw-bar']}></div>
            <div className={styles['draw-article']}>
              <p />
              <p />
              <p />
              <p />
            </div>
            <div className={styles['draw-aside']} />
          </div>
          <div className={styles['frontend-imgs']}>
            <p> Frontend Techonologies</p>
            <Image src={ReactImg} height="100%" width="100%" alt="frontend-img" className={styles['react-img']} />
            <Image src={NextImg} height={70} width={100} alt="frontend-img" className={styles['next-img']} />
            <Image src={JavaScript} height={70} width={70} alt="frontend-img" className={styles['js-img']} />
            <Image src={CssImg} height={70} width={60} alt="frontend-img" className={styles['css-img']} />
            <Image src={SassImg} height={70} width={70} alt="frontend-img" className={styles['sass-img']} />
            <Image src={TailwindcssImg} height={80} width={70} alt="frontend-img" className={styles['tailwind-img']} />
          </div>
        </div>
        <div className={styles['backend-container']}>
          <div className={styles['frontend-imgs']}>
            <p>Backend Technologies</p>
            <Image src={JWTImg} height={100} width={120} alt="frontend-img" className={styles['jwt-img']} />
            <Image src={ExpressImg} height={70} width={80} alt="frontend-img" className={styles['express-img']} />
            <Image src={FastApiImg} height={50} width={80} alt="frontend-img" className={styles['fastapi-img']} />
            <Image src={NodejsImg} height={100} width={100} alt="frontend-img" className={styles['node-img']} />
            <Image src={Python} height={60} width={60} alt="frontend-img" className={styles['python-img']} />
            <Image src={MysqlImg} height={120} width={110} alt="frontend-img" className={styles['mysql-img']} />
            <Image src={PostgresImg} height={70} width={110} alt="frontend-img" className={styles['postgres-img']} />
            <Image src={MongoImg} height={100} width={120} alt="frontend-img" className={styles['mongo-img']} />
          </div>
          <div className={styles['backend-draw']}>
            <div className={styles['server-draw-one']}>
              <p className={styles['server-button']} />
              <p className={styles['server-bar']} />
              <p className={styles['server-bar']} />
              <p className={styles['server-bar']} />
            </div>
            <Image src={Gear} width={100} height={100} className={styles['gear-one']} />
            <Image src={Gear} width={100} height={100} className={styles['gear-two']} />
            <div className={styles['server-draw-two']}>
              <p className={styles['server-button']} />
              <p className={styles['server-bar']} />
              <p className={styles['server-bar']} />
              <p className={styles['server-bar']} />
            </div>
          </div>
        </div>
        <div className={styles['tools-container']}>
          <div className={styles['tools-draw']}>
            <p className={styles['pointer']}/>
            <p className={styles['underscore']}></p>
          </div>
          <div className={styles['frontend-imgs']}>
            <p>Tools and Additional Knowledge</p>
            <Image src={GitImg} height={50} width={90} alt="frontend-img" className={styles['git-img']} />
            <Image src={AzureImg} height={70} width={70} alt="frontend-img" className={styles['azure-img']} />
            <Image src={Github} height={80} width={100} alt="frontend-img" className={styles['github-img']} />
            <Image src={JestImg} height={50} width={100} alt="frontend-img" className={styles['jest-img']} />
            <Image src={MacImg} height={70} width={70} alt="frontend-img" className={styles['mac-img']} />
            <Image src={WindowsImg} height={80} width={80} alt="frontend-img" className={styles['window-img']} />
            <Image src={LinuxImg} height={80} width={80} alt="frontend-img" className={styles['linux-img']} />
          </div>
        </div>
      </div>
    </div>
  );
}
