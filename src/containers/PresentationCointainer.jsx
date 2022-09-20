import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import PortfolioContainer from './PortfolioContainer';
import AboutMe from '@components/AboutMe';
import Contacts from '@components/Contacts';
import Quotes from '@components/Quotes';
import Abilities from '@components/Abilities';
import styles from '@styles/Presentation.module.scss'


export default function PresentationCointainer() {
    const { state } = useContext(AppContext);
    return(
        <div className={styles.presentation}>
        {state.tagsActives[0] == undefined ? <Quotes/> : ""}
        {state.tagsActives.includes("Portfolio") &&<PortfolioContainer/>}
        {state.tagsActives.includes("Abilities") &&<Abilities/>}
        {state.tagsActives.includes("About Me") && <AboutMe/>}
        {state.tagsActives.includes("Contacts") && <Contacts/>}
        </div>
    )

};
