import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import { authMiddleware } from "../middlewares/auth.ts";
import { Handlers } from "$fresh/server.ts";
import LoginPanel from "../islands/LoginPanel.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const auth = await authMiddleware(req);
    if (auth) {
      const headers = new Headers({
        location: new URL(req.url).origin,
      });
      return new Response("Already logged in", {
        status: 302,
        headers,
      });
    }

    const resp = await ctx.render();
    return resp;
  },
};

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
