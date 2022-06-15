import { createServer } from "@graphql-yoga/node";
import { findLectureById } from "../../api/psql_client";

const typeDefs = /* GraphQL */ `
  type Query {
    lecture(id: String): Lecture!
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
`;

const resolvers = {
  Query: {
    async lecture(parent, args, context) {
      const { id } = args;
      return findLectureById(id);
    },
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
