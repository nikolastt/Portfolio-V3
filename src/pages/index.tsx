import Head from "next/head";
import Main from "../components/Main";
import MenuNav from "../components/MenuNav";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-primary-900">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuNav />

      <section>
        <Main />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>
    </div>
  );
}
