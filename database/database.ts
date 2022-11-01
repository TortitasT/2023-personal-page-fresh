export async function getDatabase() {
  const db = await Deno.readTextFile("./database.json");

  return JSON.parse(db);
}

export async function setDatabase(database: Object) {
  await Deno.writeTextFile("./database.json", JSON.stringify(database));
}
