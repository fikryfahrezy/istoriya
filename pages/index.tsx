import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../components/home';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#212121" />
        <meta name="msapplication-navbutton-color" content="#212121" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#212121" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default IndexPage;