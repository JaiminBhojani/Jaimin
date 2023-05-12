import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import { Inter } from 'next/font/google'
import { getCookie } from 'cookies-next';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ name }) {
  return (
    <>

      <Hero />
      <Highlight />

    </>
  )
}

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var name = getCookie('name', { req, res });
  if (name == undefined) {
    name = false;
  }
  return { props: { name } };
};
