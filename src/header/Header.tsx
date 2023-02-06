import React from 'react';
import classes from './Header.module.css'
import Nav from "../nav/Nav";
import container from "../common/styles/Container.module.css";
// className={`${container.main} ${classes.projectsContainer}`}
//        <header className={classes.header}>
const Header = () => {
    return (
        <div className={classes.main}>
            <header className={`${container.main} ${classes.headerContainer}`}>
                <Nav/>
            </header>
        </div>
    );
};

export default Header;