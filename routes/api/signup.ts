import { Handlers } from "$fresh/server.ts";
import { User } from "../../database/models/user.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    try {
      const formData = await req.formData();

      const username = formData.get("username")?.toString();
      const email = formData.get("email")?.toString();
      const password = formData.get("password")?.toString();

      if (!username || !email || !password) {
        return new Response("Missing fields", { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password);

      const user = new User(username, email, hashedPassword);
      await user.create();

      return new Response(JSON.stringify(user), {
        status: 201,
      });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};
