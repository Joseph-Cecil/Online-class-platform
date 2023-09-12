import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {  

  return (
    <>
      <Head>
        <title>Sprall Online Platform</title>
        <meta name="description" content="A platform which allows users to post and monitor thier courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1>Landing Page</h1>
      </main>
    </>
  );
}
