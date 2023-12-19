import fs from "node:fs/promises";

// Read from a file called myfile.txt, count the number of words in that file,
// and output that number to the console.
const countWordsInFile = async (filepath) => {
  const contents = await fs.readFile(filepath, "utf-8");
  const numberOfWords = contents.split(" ").length;
  console.log(numberOfWords);
};

// Write to a file with some example data.
// Pass a filepath to that file as an input.

export default countWordsInFile;
