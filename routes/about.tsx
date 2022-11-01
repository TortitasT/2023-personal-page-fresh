import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Tortitas Personal Page</title>
        <link rel="stylesheet" href="assets/css/main.min.css" />
      </Head>

      <Header page={1} />

      <main>
        <h1>About</h1>

        <p>
          I'm a software developer, I like to make games and web apps. I
          currently work at{" "}
          <a href="https://descom.es/">
            <span>Descom</span>
          </a>.
        </p>

        <p>
          I've made a few games, you can check them out on{" "}
          <a href="https://tortitas.itch.io/">
            <span>Itch.io</span>
          </a>.
        </p>
      </main>

      <Footer />
    </Fragment>
  );
}
