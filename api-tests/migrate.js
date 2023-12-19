import pg from "pg";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const { DATABASE_URL } = process.env;

const client = new pg.Client({ connectionString: DATABASE_URL });

await client.connect();

const content = await fs.readFile(
  new URL("./migration.sql", import.meta.url).pathname,
  "utf-8"
);

await client.query(content);

await client.end();

process.exit(0);
