import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import { authMiddleware } from "../middlewares/auth.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const auth = await authMiddleware(req);
    if (!auth) {
      return new Response("Unauthorized", { status: 401 });
    }

    const resp = await ctx.render();
    return resp;
  },
};

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>Tortitas Personal Page</title>
        <link rel="stylesheet" href="assets/css/main.min.css" />
      </Head>

      <Header page={5} />

      <main>
        <h1>Profile</h1>

        <p>This page is private</p>
      </main>

      <Footer />
    </Fragment>
  );
}
