import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const headers = new Headers({
      location: new URL(req.url).origin,
    });

    headers.append("Set-Cookie", "auth=; Max-Age=0");

    return new Response("Logged out", {
      status: 302,
      headers,
    });
  },
};
