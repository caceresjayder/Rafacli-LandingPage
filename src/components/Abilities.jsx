import React from 'react';
import styles from '@styles/Abilities.module.scss';

const abilities = {
    backend:[
        'Node.js programming and package management with npm.',
        'Representational data transfer management of application programming interfaces (RESTfulAPI).','Management application paths with Express.js.','Management of validation, authentication, authorization and encryption middlewares with packages such as JWT, Passport, and bcrypt.','Data manipulation in JSON, XML formats.'],
    frontend:['Creating responsive user interfaces with HTML, CSS, Javascript.','Create web applications with React and Next.js.','Handling requests and answers with Axios and Fetch.','Handling pre formatted libraries such as SAAS and TailwindCSS.','Handling and handling of events and application status.'],
    databases:['Management of DDL, DML, DQL commands.','Management of consultations with Sequelize.','Integration for Web and Mobile Applications.','Management of Postgresql, Mysql, MongoDB databases.'],
    additional:['Git and Github.','Ethical Hacking: SQL Injections, Local and Remote File Injections,  port mapping, vulnerability detection, brute force application to algorithms.', 'Operating systems Windows, Ubuntu, ParrotOs, KaliLinux and MacOS, its terminals and command lines.','Network structures (TCP/IP, DNS, IPV4, IPV6, HTTP protocols, SSL).','Linux Server Management (Ubuntu Server, CentOs).','Microsoft Azure Web Servers.'],
    
}

export default function Abilities(){
    return(
        <div className={styles.abilities}>
            <div className={styles['abilities-container']}>
                <div className={styles['ability-info']}>
                    <p className={styles['ability-info-bar']}>
                        Frontend
                    </p>
                    <ul>
                        {abilities.frontend.map((item)=>{
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={styles['ability-info']}>
                    <p className={styles['ability-info-bar']}>
                        Backend
                    </p>
                    <ul>
                        {abilities.backend.map((item)=>{
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={styles['ability-info']}>
                    <p className={styles['ability-info-bar']}>
                        Databases SQL and NoSQL
                    </p>
                    <ul>
                        {abilities.databases.map((item)=>{
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={styles['ability-info']}>
                    <p className={styles['ability-info-bar']}>
                        Additional
                    </p>
                    <ul>
                        {abilities.additional.map((item)=>{
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )    
}