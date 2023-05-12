import React from 'react'
import styles from '../styles/Login.module.css'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter()
    const { msg } = router.query

    return (

        <form className={styles.form} action='/api/login' method='POST' >
            {msg ?
                <h3 className="red">{msg}</h3>
                :
                <></>
            }
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                    UserName
                </label>
                <input type="name" name='name' id="name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>
                    Password
                </label>
                <input type="password" name='password' id="password" className={styles.formInput} required/>
            </div>
            <button type="submit" className={styles.formSubmit}>
                Sign In
            </button>
        </form>

    )
}

export default Login


export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var name = getCookie('name', { req, res });
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
