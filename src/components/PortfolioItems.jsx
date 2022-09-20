import Image from 'next/image';
import React from 'react';
import HTML from '@assets/html.png';
import Python from '@assets/python.png';
import JavaScript from '@assets/javascript.png';
import dateFormat from 'dateformat';
import styles from '@styles/PortFolioItem.module.scss';

export default function PortfolioItems(props) {
  const img = () => {
    if (props.repo.language.includes('HTML')) return HTML;
    if (props.repo.language.includes('JavaScript')) return JavaScript;
    if (props.repo.language.includes('Python')) return Python;
  };
  return (
    <div className={styles.portfolioitems}>
      <div className={styles['portfolioitems-container']}>
        <div className={styles['img-container']}>
          <Image alt={props.repo.language} src={img()} width={50} height={50} />
        </div>
        <div className={styles['text-container']}>
          <p>
            <span>{`Repository name: `}</span>
            <br />
            <span>{props.repo.name}</span>
          </p>
          <p>{`Programing Lang: ` + props.repo.language}</p>
          <p>{`Description: ` + props.repo.description}</p>
          <p>{`Last update: ` + dateFormat(props.repo.updated_at, 'mmmm dd, yyyy')}</p>
          <a href={props.repo.html_url} target="_blank" rel="noreferrer">
            Link to Github
          </a>
        </div>
      </div>
    </div>
  );
}
