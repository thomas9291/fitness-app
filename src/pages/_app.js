import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [trainingAdded, setTrainingAdded] = useLocalStorageState(
    "trainingAdded",
    { defaultValue: [] }
  );
  const [trainingAddedWeek2, setTrainingAddedWeek2] = useLocalStorageState(
    "trainingAddedWeek2",
    { defaultValue: [] }
  );
  return (
    <>
      <Head>
        <title>Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
          <Component
            {...pageProps}
            trainingAdded={trainingAdded}
            setTrainingAdded={setTrainingAdded}
            trainingAddedWeek2={trainingAddedWeek2}
            setTrainingAddedWeek2={setTrainingAddedWeek2}
          />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
