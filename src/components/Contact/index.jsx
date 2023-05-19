import React from 'react'
import styles from './styles.module.css'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.socIcons}>
                <a href="https://linkedin.com">
                    <FaLinkedinIn className={styles.icon} />
                </a>

                <a href="https://linkedin.com">
                    <FaTwitter className={styles.icon} />
                </a>
            </div>
        </div >
    )
}

export default Contact