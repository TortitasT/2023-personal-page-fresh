import { getDatabase } from "../database/database.ts";
import { getCookies } from "https://deno.land/std@0.161.0/http/cookie.ts";

export async function authMiddleware(request: Request) {
  const token = getCookies(request.headers).token;

  if (token) {
    const db = await getDatabase();

    for (const user of db.users) {
      if (user.extra.token === token) {
        return true;
      }
    }
  }

  return false;
}
