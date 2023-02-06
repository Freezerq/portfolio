import React from 'react';
import classes from "./Projects.module.css";
import container from "../common/styles/Container.module.css";
import ProjectItem from "./projectItem/ProjectItem";

const Projects = () => {
    return (
        <div className={classes.main}>
            <div className={`${container.main} ${classes.projectsContainer}`}>
                <h2 className={classes.title}>Projects</h2>
                <div className={classes.projects}>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </div>
    );
};

export default Projects;