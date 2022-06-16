import { Client } from "pg";

const client = new Client({
  user: "cat",
  password: "cat",
});
client.connect();

export const returnLectures = async () =>
  (await client.query("SELECT * FROM cds_lecture")).rows;