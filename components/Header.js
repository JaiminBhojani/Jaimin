'use client'

import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { CgCloseR, CgMenu } from "react-icons/cg";
import { getCookie } from 'cookies-next';

const Header = ({ name }) => {

    const [openMenu, setOpenMenu] = useState(false);
    // console.log("value " + openMenu)

    return (
        <>
            <nav className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : ""}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/"
                                onClick={() => setOpenMenu(false)}
                            >Home</Link>
                            <></>
                        </li>
                        {name ? <>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/workout"
                                    onClick={() => setOpenMenu(false)}
                                >Workout</Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/setting"
                                    onClick={() => setOpenMenu(false)}
                                >Setting</Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/api/logout"
                                    onClick={() => setOpenMenu(false)}
                                >Logout</Link>
                            </li>
                            

                        </> :
                            <>

                                <li className={styles.navbarItem}>
                                    <Link className={styles.navbarLink}
                                        onClick={() => setOpenMenu(false)}
                                        href="/signup">Signup</Link>
                                </li>
                                <li className={styles.navbarItem}>
                                    <Link className={styles.navbarLink}
                                        onClick={() => setOpenMenu(false)}
                                        href="/login">Login</Link>
                                </li>
                                <>
                                {name}
                                </>
                                
                            </>}
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var name = getCookie('name', { req, res });
    if (name == undefined) {
        name = false;
    }
    return { props: { name } };
};
