import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <a onClick={() => scrollToTop()} className={styles.headerLink}>
                <h1>Your Weather</h1>
            </a>
        </div>
    );
};

export default Header;
