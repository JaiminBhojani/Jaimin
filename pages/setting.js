import React from 'react'

const setting = ({name,email,password}) => {
    return (
        <div>
            {name}
            {email}
            {password}

        </div>
    )
}

export default setting

import { getCookie } from 'cookies-next';
export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var name = getCookie('name', { req, res });
    if (name == undefined) {
        name = false;
    }
    return { props: { name } };
};