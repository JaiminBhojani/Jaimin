import React from 'react'
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import Layout from '../components/Layout'
import Link from 'next/link'

const signup = () => {

    const router = useRouter()
    const { msg } = router.query

    return (
        <>
            <Link href="/">Home</Link><br />
            {msg ?
                <h3 className="red">{msg}</h3>
                :
                <></>
            }
            <form action='/api/signup' method='POST' className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        UserName
                    </label>
                    <input type="text" name='name' id="name" className={styles.formInput}
                        required />
                </div>
                <div className={styles.formGroup}>
                    <label  className={styles.formLabel}>
                        Email
                    </label>
                    <input type="email" name ='email' id="email" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                    <label  className={styles.formLabel}>
                        Password
                    </label>
                    <input type="password" name='password' id="password" className={styles.formInput} />
                </div>
                <button type="submit" className={styles.formSubmit}>
                    Create Account
                </button>
            </form>
        </>
    )
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var name = getCookie('name',{ req, res });
    console.log(name);  
    if (name != undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: { name: false } };
};

export default signup
