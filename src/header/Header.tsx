import React from 'react';
import classes from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <header className={classes.header}>
            <Nav/>
        </header>
    );
};

export default Header;