import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    // Personnalisez l'en-tête HTTP avec la CSP
    const cspValue =
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; frame-ancestors 'self';";

    const metaCSP = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]'
    );
    if (metaCSP) {
      metaCSP.setAttribute("content", cspValue);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Fitness</title>
        <meta
          name="viewport"
          /*  httpEquiv="Content-Security-Policy"
          content="width-device=width , initial-scale=1, upgrade-insecure-requests,viewport-fit=cover," */
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <SessionProvider session={session}>
        <SWRConfig
          value={{
            fetcher: async (...args) => {
              const response = await fetch(...args);
              if (!response.ok) {
                throw new Error(`Request with ${JSON.stringify(args)} failed.`);
              }
              return await response.json();
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
