import React from 'react';
import classes from './ProjectItem.module.css'

const ProjectItem = () => {
    return (
        <div className={classes.ProjectItemContainer}>
            <div className={classes.imageContainer}>
                <button>Посмотреть</button>
            </div>
            <div className={classes.projectInfo}>
                    <h3 className={classes.projectTitle}>Project Title</h3>
                    <span className={classes.description}>Lorem d asdasdasdsd  asdasdas asdas
                        itet laudaneasdasfasf fassunasenetf voslfupassftatum? Ipsa, ssstempora?</span>
            </div>
        </div>
    );
};

export default ProjectItem;