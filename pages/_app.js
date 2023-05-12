import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { getCookieParser } from 'next/dist/server/api-utils';
import { CookiesProvider } from 'react-cookie';
import { getCookie } from 'cookies-next';
import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextUIProvider>

      <CookiesProvider>

        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />

      </CookiesProvider>
    </NextUIProvider>
  )
}






