import React from 'react';
import classes from "./Contacts.module.css";
import container from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={classes.main}>
            <div className={`${container.main} ${classes.contactsContainer}`}>
                <div className={classes.title}>
                    <h2>Контакты</h2>
                </div>
                <div >
                    <form className={classes.form} action="">
                        <input value='text' type="text"/>
                        <input value='text' type="text"/>
                        <textarea>text</textarea>
                    </form>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;