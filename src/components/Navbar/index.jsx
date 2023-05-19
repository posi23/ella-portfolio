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

    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.links}>
                    <div className={styles.logoContainer}>
                        <Link to="/" onClick={() => setActive("")}>
                            <MyLogo className={styles.logo} />
                        </Link>
                    </div>

                    <ul className={styles.list}>
                        {navLinks.map((link) => (
                            <a href={link.id !== "home" ? `#${link.id}` : "/"}>
                                <li
                                    key={link.id}
                                    className={clsx(styles.listItem, active === link.id ? styles.active : null)}
                                    onClick={() => setActive(link.id)}
                                >
                                    {link.title}
                                </li>
                            </a>
                        ))}
                    </ul>

                    <div className={styles.hamburgerMenu}>
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
                                    <a href={link.id !== "home" ? `#${link.id}` : "/"}>
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
                                    </a>
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