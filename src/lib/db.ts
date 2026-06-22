import { neon } from "@neondatabase/serverless";

const postgresUrl = process.env.POSTGRES_URL;
if (!postgresUrl)
  throw new Error("Missing required environment variable: POSTGRES_URL");

export const sql = neon(postgresUrl);
