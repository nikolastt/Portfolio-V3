import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nikolas Bitencourt</title>
        <meta
          name="description"
          content="Desenvolvedor Front-end | React JS | Java Script | Typescript | Next JS |"
        />
        <meta name="author" content="Nikolas Bitencourt" />
        <meta
          name="keywords"
          content="nikolas, bitencourt, portfolio, desenvolvedor, react js, js, javascript, next, next js, typescript, front end, programador, software, tailwind css, css, react, "
        />
        <meta
          name="google-site-verification"
          content="C4ne6DifY4pvBeJI0jriXYaLdVoafoAncatYdvK0dB8"
        />
        <link rel="icon" href="/images/NB.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
