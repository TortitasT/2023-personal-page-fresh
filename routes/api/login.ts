import { Handlers } from "$fresh/server.ts";
import { getDatabase, setDatabase } from "../../database/database.ts";
import { User } from "../../database/models/user.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { setCookie } from "https://deno.land/std@0.161.0/http/cookie.ts";

export const handler: Handlers = {
  async POST(request, _ctx) {
    try {
      const formData = await request.formData();

      const identification = formData.get("email")
        ? formData.get("email")?.toString()
        : (formData.get("username")
          ? formData.get("username")?.toString()
          : null);
      const password = formData.get("password")?.toString();

      if (!identification || !password) {
        return new Response("Missing fields", { status: 400 });
      }

      const db = await getDatabase();

      const user = db.users.find(
        (user: User) =>
          user.username === identification || user.email === identification,
      );

      if (!user) {
        return new Response("User not found", { status: 404 });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return new Response("Incorrect password", { status: 401 });
      }

      user.extra.auth = Math.random().toString(36).substr(2, 9);

      await setDatabase(db);

      const response = new Response(JSON.stringify(user), {
        status: 200,
      });

      setCookie(response.headers, {
        name: "auth",
        value: user.extra.auth,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      return response;
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
}; //TODO
