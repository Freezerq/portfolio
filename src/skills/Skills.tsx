import React from 'react';
import container from '../common/styles/Container.module.css'
import classes from './Skills.module.css'
import Skill from "./skill/Skill";
//            <div className={`${container.main} ${classes.skillsContainer}`}>
const Skills = () => {
    return (
        <div className={classes.main}>
            <div className={`${classes.skillsContainer}`}>
                <div><h2 className={classes.title}>Skills</h2></div>
                <div className={classes.skills}>
                    <Skill title={'HTML'}/>
                    <Skill title={'JS'}/>
                    <Skill title={'REaCT'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;