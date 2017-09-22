import {
  VALID_NAME,
  VALID_TYPE,
  toHaveEndpointUrlMethod,
  toHaveMatchMethod,
  toHaveProcessMethod
} from "@minni-im/minni-embed/lib/jest";

import YoutubeEmbed from "../";

expect.extend({
  toHaveEndpointUrlMethod,
  toHaveMatchMethod,
  toHaveProcessMethod,
});

test("New instance of Embed can be created", () => {
  let embed = new YoutubeEmbed();
  expect(embed).toBeDefined();
});

test("Embed should have a valid name and type", () => {
  const embed = new YoutubeEmbed();
  expect(embed.name).toMatch(VALID_NAME);
  expect(embed.type).toMatch(VALID_TYPE);
});

test("Embed should implement needed methods", () => {
  const embed = new YoutubeEmbed();
  expect(embed).toHaveEndpointUrlMethod();
  expect(embed).toHaveMatchMethod();
});
