import React from 'react';
import classes from './Remote.module.css'

const Remote = () => {
    return (
        <div className={classes.main}>
            <div className={classes.remoteContainer}>
                    <div  className={classes.title}>
                        <h2>Рассматриваю варианты удалённой работы</h2>
                    </div>
                    <div className={classes.hireButton}>
                        <button>Нанять</button>
                    </div>
            </div>
        </div>
    );
};

export default Remote;