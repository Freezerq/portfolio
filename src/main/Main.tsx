import React from 'react';
import classes from './Main.module.css'
import container from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={container.main}>
                <div className={classes.welcomeText}>
                    <span>Hi there</span>
                    <h1>I`m Ivlev</h1>
                    <p>React samurai</p>
                </div>
                <div className={classes.photo}>photo</div>
            </div>
        </div>
    );
};

export default Main;