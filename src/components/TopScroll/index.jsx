import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from './styles.module.css'

const TopScroll = ({ containerRef }) => {
    const [show, setShow] = useState(false);

    const scrollHandler = () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop
            const containerHeight = containerRef.current.clientHeight
            setShow(scrollTop > containerHeight)
        }
    }

    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", scrollHandler);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", scrollHandler);
            }
        };
    }, []);



    return (
        show && (<div
            className={styles.topScroll}
            onClick={scrollToTop}
        >
            <div className={styles.topScrollIcon}>
                <FaArrowUp />
            </div>
        </div>)
    );
}

export default TopScroll;