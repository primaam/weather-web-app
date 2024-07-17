import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.loader}></div>
            <p>Please wait, data will shows up soon</p>
        </div>
    );
};

export default Loader;
