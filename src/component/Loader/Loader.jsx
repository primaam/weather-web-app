import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.loader}></div>
            <h1 className={styles.title}>Please wait, data will shows up soon</h1>
        </div>
    );
};

export default Loader;
