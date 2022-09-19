import Image from 'next/image';
import React from 'react';
import html from '@assets/html.png';
import python from '@assets/python.png';
import javascript from '@assets/javascript.png';
import dateFormat from 'dateformat';
import styles from '@styles/PortFolioItem.module.scss'


export default function PortfolioItems(props) {
    const HTML = html;
    const Python = python;
    const Javacript = javascript;
    return(
        <div className={styles.portfolioitems}>
            <div className={styles['portfolioitems-container']}>
                <div className={styles['img-container']}>    
                    <Image src={eval(props.repo.language)} width={50} height={50}/>
                </div>
                <div className={styles['text-container']}>
                    <p>
                        <span>{`Repository name: `}</span><br/>
                        <span>{props.repo.name}</span>
                    </p>
                    <p>{`Programing Lang: ` + props.repo.language}</p>
                    <p>{`Description: ` + props.repo.description}</p>
                    <p>{`Last update: ` + dateFormat(props.repo.updated_at, "mmmm dd, yyyy")}</p>
                    <a href={props.repo.html_url} target='_blank'>Link to Github</a>
                </div>
            </div>

        </div>
    )
    
};
