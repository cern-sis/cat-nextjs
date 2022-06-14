import { Client } from "pg";

export default async function handler(req, res) {
  const { id } = req.query;
  const client = new Client({
    user: "cat",
    password: "cat",
  });
  await client.connect();

  const result = await client.query(
    "SELECT * FROM cds_lecture WHERE lecture_id = " + id
  );
  await client.end();
  res.status(200).json(result.rows[0]);
}
