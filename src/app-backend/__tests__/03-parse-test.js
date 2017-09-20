import YoutubeEmbed from "../";

import { parse } from "@minni-im/minni-embed";

test("Embed should parse standard url", () => {
  const tree = parse("https://www.youtube.com/watch?v=4SbiiyRSIwo");
  expect(tree.length).toBe(1);
  expect(tree[0].type).toBe("youtube");
  expect(tree[0].id).toBe("4SbiiyRSIwo");
});

test("Embed should parse short url", () => {
  const tree = parse("https://youtu.be/XUvhAPs38RA");
  expect(tree.length).toBe(1);
  expect(tree[0].type).toBe("youtube");
  expect(tree[0].id).toBe("XUvhAPs38RA");
});

test("Embed should parse embed url", () => {
  const tree = parse("https://www.youtube.com/embed/vsF0K3Ou1v0");
  expect(tree.length).toBe(1);
  expect(tree[0].type).toBe("youtube");
  expect(tree[0].id).toBe("vsF0K3Ou1v0");
});

test.skip(
  "Embed should parse url containing query params other than video id",
  () => {
    const tree = parse("https://youtu.be/XUvhAPs38RA?t=12334");
    expect(tree.length).toBe(1);
    expect(tree[0].type).toBe("youtube");
    expect(tree[0].id).toBe("XUvhAPs38RA");
  }
);
