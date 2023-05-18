import React, { useState } from 'react'
import styles from './styles.module.css'
import { BiSearchAlt } from 'react-icons/bi'
import { navLinks } from '../../constants'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { close, menu } from '../../assets'

const Navbar = () => {

    const [active, setActive] = useState("home")
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.links}>
                    <div className={styles.logoContainer}>
                        <img src="./images/logo.svg" alt="" className={styles.logo} />
                    </div>

                    <ul className={styles.list}>
                        {navLinks.map((link) => (
                            <Link to="/">
                                <li
                                    key={link.id}
                                    className={clsx(styles.listItem, active === link.id ? styles.active : null)}
                                    onClick={() => setActive(link.id)}
                                >
                                    {link.title}
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <div className={styles.hamburgerMenu}>
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            style={{ width: "30px", height: "30px", cursor: "pointer" }}
                            onClick={() => setToggle(!toggle)}
                        />

                        <div style={{ display: toggle ? "flex" : "none" }} className={styles.menu}>
                            <ul className={styles.verticalList}>
                                {navLinks.map((link) => (
                                    <Link to="/">
                                        <li
                                            key={link.id}
                                            className={clsx(styles.listItem, active === link.id ? styles.active : null)}
                                            onClick={() => {
                                                setToggle(!toggle)
                                                setActive(link.id)
                                            }}
                                        >
                                            {link.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.icons}>
                    <BiSearchAlt size={30} className={styles.icon} />
                    <button className={styles.button}>Hire Now</button>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar