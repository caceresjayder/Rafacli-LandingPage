import React from 'react';
import Image from 'next/image';
import Youtube from '@assets/youtube.png'
import Github from '@assets/github.png'
import Gmail from '@assets/gmail.png'
import TikTok from '@assets/tik-tok.png'
import linkedin from '@assets/linkedin.png'
import styles from '@styles/Contacts.module.scss'

export default function Contacts(){
    return(
        <div className={styles.contacts}>
            <div className={styles['contacts-container']}>
            <div className={styles['contact-info']}>
                    <Image src={Gmail} width={50} height={50}/>
                    <a href='mailto://caceresjayder@gmail.com' target="_blank" rel="noopener noreferrer">E-mail</a>
                </div>
                <div className={styles['contact-info']}>
                    <Image src={linkedin} width={50} height={50}/>
                    <a href='https://linkedin.com/in/caceresjayder' target="_blank" rel="noopener noreferrer">LinkedIn
                    <br/>
                    Professional Profile
                    </a>
                </div>
                <div className={styles['contact-info']}>
                    <Image src={Github} width={50} height={50}/>
                    <a href='https://github.com/caceresjayder' target="_blank" rel="noopener noreferrer">Github
                    <br/>
                    Portfolio Repositories
                    </a>
                </div>
                <div className={styles['contact-info']}>
                    <Image src={Youtube} width={50} height={50}/>
                    <a href='https://www.youtube.com/channel/UCpbkHF3UAdestKUyVFC15tg' target="_blank" rel="noopener noreferrer">Youtube
                    <br/>
                    Channel
                    </a>
                </div>
                <div className={styles['contact-info']}>
                    <Image src={TikTok} width={50} height={50}/>
                    <a href='https://www.tiktok.com/@rfacode' target="_blank" rel="noopener noreferrer">Tik Tok
                    <br/>
                    Channel
                    </a>
                </div>
            </div>
        </div>
    )

}