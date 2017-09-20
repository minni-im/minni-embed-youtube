import matchers from "@minni-im/minni-embed/lib/jest";
import YoutubeEmbed from "../";

expect.extend(matchers);

test("New instance of Embed can be created", () => {
  let embed = new YoutubeEmbed();
  expect(embed).toBeDefined();
});

test("Embed should have a valid name and type", () => {
  const embed = new YoutubeEmbed();
  expect(embed).toHaveValidName();
  expect(embed).toHaveValidType();
});

test("Embed should implement needed methods", () => {
  const embed = new YoutubeEmbed();
  expect(embed).toHaveEndPointUrlMethod();
  expect(embed).toHaveMatchMethod();
  expect(embed).toHaveProcessMethod();
});
