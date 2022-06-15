import { Client } from "pg";

const client = new Client({
  user: "cat",
  password: "cat",
});
await client.connect();

const findLectureById = async (id: string) =>
  (await client.query("SELECT * FROM cds_lecture WHERE lecture_id = " + id))
    .rows[0];

export { findLectureById };
