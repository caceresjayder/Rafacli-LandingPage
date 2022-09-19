import React from 'react';
import { useState, useEffect } from "react";
import { Octokit } from 'octokit'
import PortfolioItems from '@components/PortfolioItems';
import styles from '@styles/PortfolioContainer.module.scss'


const APIKEY = process.env.API_KEY_GITHUB
const octokit = new Octokit({
    auth: APIKEY 
})


export default function PortfolioContainer(){
    const [repos, setRepos] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const res = await octokit.request('GET /users/caceresjayder/repos',{})
            setRepos(res.data);
        }
        try{
            fetchData();
        }
        catch(err){
            console.log(err)
        }
    },[]);
    return(
        <div className={styles.portfoliocontainer}>
            {
            repos.map((repo)=>{
                return <PortfolioItems repo={repo}/>
            })}
        </div>
    )
}