import YoutubeEmbed from "../";

import { process } from "@minni-im/minni-embed";

test("Embed should not generate data for invalid url", () => {
  return process("foo bar").then(embed => {
    expect(embed).toEqual([]);
  });
});

test("Youtube embed should generate embedded data from proper oEmbed data", () => {
  return process("https://youtube.com/watch?v=4SbiiyRSIwo").then(results => {
    expect(results.length).toEqual(1);

    const { type, provider, author } = results[0];
    expect(type).toEqual("video.youtube");
    expect(provider).toEqual({
      name: "YouTube",
      url: "https://www.youtube.com/",
    });
    expect(author).toBeDefined();
    expect(author).toHaveProperty("name", "AngularConnect 2015");
  });
});
