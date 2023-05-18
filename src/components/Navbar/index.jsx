import React, { useState } from 'react'
import styles from './styles.module.css'
import { navLinks } from '../../constants'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
// import { close, menu } from '../../assets'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Menu } from '../../assets/menu.svg'
import { ReactComponent as MyLogo } from '../../assets/myLogo.svg'

const Navbar = () => {

    const [active, setActive] = useState("home")
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.links}>
                    <div className={styles.logoContainer}>
                        {/* <img src="./logo.svg" alt="" className={styles.logo} /> */}
                        <MyLogo className={styles.logo} />
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
                        {/* <img
                            src={toggle ? Close : Menu}
                            alt="menu"
                            style={{ width: "30px", height: "30px", cursor: "pointer" }}
                            onClick={() => setToggle(!toggle)}
                        /> */}

                        {toggle ? (
                            <Close
                                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                onClick={() => setToggle(!toggle)}
                            />
                        ) : (
                            <Menu
                                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                onClick={() => setToggle(!toggle)}
                            />
                        )}

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