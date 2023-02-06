import React from 'react';
import classes from './Nav.module.css'


const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Nav;