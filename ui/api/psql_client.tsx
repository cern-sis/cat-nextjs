import { Client } from "pg";

const client = new Client({
  user: "cat",
  password: "cat",
});
client.connect();

export const findLectureById = async (id: string) =>
  (await client.query("SELECT * FROM cds_lecture WHERE lecture_id = " + id))
    .rows[0];
