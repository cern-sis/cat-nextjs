import { createServer } from "@graphql-yoga/node";
import { findLectureById, returnLectures } from "../../api/db_client";

const typeDefs = `
  type Query {
    lecture(id: String): Lecture!
    lectures: Lectures!,
  }
  type Lecture {
    id: String
    lecture_id: Int
    title: String
    date: String
    corporate_author: String
    abstract: String
    series: String
    speaker: String
    speaker_details: String
    event_details: String
    thumbnail_picture: String
    language: String
    subject_category: String
    lecture_note: String
    imprint: String
    license: String
    keywords: [String]
    sponsor: String
    files: [String]
    type: [String]
  }
  type Lectures {
    results: [Lecture!]!
  }
`;

const resolvers = {
  Query: {
    lecture: async (parent, args, context) => findLectureById(args.id),
    lectures: async (parent, args, context) => returnLectures(),
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api/graphql",
});

export default server;
