import { getDatabase, setDatabase } from "../database.ts";

export class User {
  id: string;

  username: string;
  email: string;
  password: string;

  extra: Object;

  constructor(username: string, email: string, password: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.username = username;
    this.email = email;
    this.password = password;
    this.extra = {};
  }

  async create() {
    const database = await getDatabase();

    if (database.users.find((user: User) => user.username === this.username)) {
      throw new Error("Username already exists");
    }

    database.users.push(this);

    await setDatabase(database);
  }
}
