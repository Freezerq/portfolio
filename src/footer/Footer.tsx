import React from 'react';
import classes from "./Footer.module.css";
import container from "../common/styles/Container.module.css";
import SocialMediaItem from "./SocialMediaItem/SocialMediaItem";

const Footer = () => {
    return (
        <div className={classes.main}>
            <div className={`${container.main} ${classes.footerContainer}`}>
                    <div className={classes.title}>
                        <h2>Иван Иванов</h2>
                    </div>
                    <div className={classes.socialMediaItems}>
                        <SocialMediaItem/>
                        <SocialMediaItem/>
                        <SocialMediaItem/>
                        <SocialMediaItem/>
                    </div>
                    <div>
                        Все права защищены
                    </div>
            </div>
        </div>
    );
};

export default Footer;