import { findLectureById } from "../../../api/psql_client";

export default async function handler(req, res) {
  const { id } = req.query;
  res.status(200).json(findLectureById(id));
}
