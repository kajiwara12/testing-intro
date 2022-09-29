import { it, expect, vi } from "vitest";
import countWordsInFile from "./sideEffect.js";

it("counts the number of words in the given file and logs it to the console", async () => {
  // Spy on the global console.log method, so we can verify it is called with
  // the correct information.
  const spy = vi.spyOn(console, "log").mockImplementation(() => {});

  await countWordsInFile("./src/myfile.txt");

  expect(spy).toHaveBeenCalledWith(4);
  spy.mockRestore();
});
