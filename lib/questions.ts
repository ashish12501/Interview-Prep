import reactQuestions from "./questions/react";
import javascriptQuestions from "./questions/javascript";
import mysqlQuestions from "./questions/mysql";
import mongoQuestions from "./questions/mongodb";
import nodeBackendQuestions from "./questions/nodejs";

export interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface Chapter {
  id: string;
  name: string;
  questions: Question[];
}

export const chapters: Chapter[] = [
  {
    id: "nodejs-backend",
    name: "Node.js Backend",
    questions: nodeBackendQuestions,
  },
  {
    id: "mysql",
    name: "MySQL",
    questions: mysqlQuestions,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    questions: mongoQuestions,
  },
  {
    id: "react",
    name: "React",
    questions: reactQuestions,
  },
  {
    id: "javascript",
    name: "JavaScript",
    questions: javascriptQuestions,
  },
];
