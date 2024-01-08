import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from './styles.module.css'

const TopScroll = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log("scroll position: " + window.scrollY);
            setScroll(window.scrollY);
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {
                console.log("scroll position: " + window.scrollY);
                setScroll(window.scrollY);
                if (window.scrollY > 100) {
                    setShow(true);
                } else {
                    setShow(false);
                }
            });
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div
            className={!show ? styles.topScrollShow : styles.topScroll}
            onClick={scrollToTop}
        >
            <div className={styles.topScrollIcon}>
                <FaArrowUp />
            </div>
        </div>
    );
}

export default TopScroll;