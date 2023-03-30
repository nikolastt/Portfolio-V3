import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nikolas Bitencourt" />
        <meta
          property="og:description"
          content="Desenvolvedor React JS | Front-end | Java Script | Typescript | Next JS |"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/portfolio-9c731.appspot.com/o/Logo.png?alt=media&token=2fd11c6e-afba-4a37-8c13-e6abc3e47fa3"
        />
        <meta property="og:image:wigth" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:url"
          content="https://nikolasbitencourt.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Nikolasbite" />
        <meta
          name="description"
          content="Desenvolvedor Front-end | React JS | Java Script | Typescript | Next JS"
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
        <title>Nikolas Bitencourt</title>
        <link rel="icon" href="/images/NB.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
