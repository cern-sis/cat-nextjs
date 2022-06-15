import { findLectureById } from "../../../api/psql_client";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log("TEST");
  try {
    const lecture = await findLectureById(id);
    lecture
      ? res.status(200).json(await findLectureById(id))
      : res
          .status(404)
          .json({ message: `Lecture with id ${id} doesn't exist.` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
