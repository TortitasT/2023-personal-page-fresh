import { getDatabase } from "../database/database.ts";
import { getCookies } from "https://deno.land/std@0.161.0/http/cookie.ts";

export async function authMiddleware(request: Request) {
  const auth = getCookies(request.headers).auth;

  if (auth) {
    const db = await getDatabase();

    for (const user of db.users) {
      if (user.extra.auth === auth) {
        return true;
      }
    }
  }

  return false;
}
