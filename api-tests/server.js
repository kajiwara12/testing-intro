import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

const client = new pg.Client({ connectionString: DATABASE_URL });

await client.connect();

const app = express();

app.use(express.json());

// How to test?
// Simulate an HTTP GET request and make sure the response matches.

// What to test?
// Response body should be a JSON-encoded array of tasks from the database.
// Response status should be 200.
// Response headers.
app.get("/api/tasks", (_, res) => {
  client.query("SELECT * FROM tasks").then((result) => {
    res.send(result.rows);
  });
});

export { client as db, app };
