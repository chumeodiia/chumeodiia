import axios from "axios";
import { writeFileSync } from "fs";

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    return data;
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

(async () => {
  const { content, author } = await getQuote();
  if (!content) return;

  writeFileSync("README.md", `_**${content}**_\n\n${author}`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
})();
