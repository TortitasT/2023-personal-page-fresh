import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Tortitas Personal Page</title>
        <link rel="stylesheet" href="assets/css/main.min.css" />
      </Head>

      <Header page={0} />

      <main>
        <h1>Welcome</h1>

        <p>Welcome to my page!</p>
      </main>

      <Footer />
    </Fragment>
  );
}
