import { it, expect, beforeEach } from "vitest";
import { app, db } from "./server.js";
import request from "supertest";

beforeEach(async () => {
  await db.query("DELETE FROM tasks");
});

it("GET /api/tasks", async () => {
  await db.query(
    "INSERT INTO tasks(description, priority) VALUES('Do the dishes', 3)"
  );

  const { status, body } = await request(app).get("/api/tasks");
  expect(status).toBe(200);

  expect(body).toBeInstanceOf(Array);
  expect(body).toHaveLength(1);
  const [firstTask] = body;
  expect(firstTask.id).toBeTypeOf("number");
  expect(firstTask).toEqual({
    description: "Do the dishes",
    priority: 3,
    id: firstTask.id,
  });
});
