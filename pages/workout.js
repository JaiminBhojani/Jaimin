import React from 'react'

import WorkCard from '@/components/WorkCard';
import { getCookie } from 'cookies-next';


const workout = ({name}) => {
  // var nname = getCookie('name', { req, res });

  return (
   <>
    {/* {nname} */}
   <WorkCard/>
   </>
  );
}

export default workout


export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var name = getCookie('name', { req, res });
  if (name == undefined) {
      name = false;
  }
  return { props: { name } };
};
