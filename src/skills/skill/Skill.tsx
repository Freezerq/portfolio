import React from 'react';
import classes from './Skill.module.css'

type SkillPropsType = {
    title: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{props.title}</h3>
            {/*сюда должны прийти в пропсах*/}
            <span className={classes.description}>
                Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet,
                consectetur
                Lorem ipsum dolor sit amet,
                consectetur
            </span>
        </div>

    );
};

export default Skill;