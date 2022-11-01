import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import { LoginPanel } from "../components/LoginPanel.tsx";

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Tortitas Personal Page</title>
        <link rel="stylesheet" href="assets/css/main.min.css" />
      </Head>

      <Header page={3} />

      <main>
        <h1>Login</h1>

        <LoginPanel />
      </main>

      <Footer />
    </Fragment>
  );
}
