import React from 'react';
import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import PortfolioItems from '@components/PortfolioItems';
import Link from 'next/link';
import styles from '@styles/PortfolioContainer.module.scss';

const APIKEY = process.env.API_KEY_GITHUB;
const octokit = new Octokit({
  auth: APIKEY,
});

export default function PortfolioContainer() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await octokit.request('GET /users/caceresjayder/repos', {});
      setRepos(res.data);
    }
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className={styles.link}>
        <p>Visit a playground with my projects</p>
        <Link href="https://playground.rafacli.site" legacyBehavior><a target="_blank" >Go to Playground!</a></Link>
      </div>
      <div className={styles.portfoliocontainer}>
        {repos.map((repo) => {
          return <PortfolioItems key={repo.id} repo={repo} />;
       })}
     </div>
    </div>
  );
}
