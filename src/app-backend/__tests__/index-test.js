import { createParser } from "./minni-test";

import { embed, NAME } from "../";

let parser;
beforeAll(() => {
    parser = createParser();
});

test("Embed should detect proper Youtube urls", () => {
    const urls = [
        "https://www.youtube.com/watch?v=4SbiiyRSIwo",
        "https://youtu.be/XUvhAPs38RA",
        "https://www.youtube.com/embed/vsF0K3Ou1v0",
    ];

    urls.forEach(url => {
        expect(embed.match(url)).toBeTruthy();
    });
});

test("Embed should parse standard url", () => {
    const tree = parser("https://www.youtube.com/watch?v=4SbiiyRSIwo");
    expect(tree.length).toBe(1);
    expect(tree[0].type).toBe("youtube");
    expect(tree[0].id).toBe("4SbiiyRSIwo");
});

test("Embed should parse short url", () => {
    const tree = parser("https://youtu.be/XUvhAPs38RA");
    expect(tree.length).toBe(1);
    expect(tree[0].type).toBe("youtube");
    expect(tree[0].id).toBe("XUvhAPs38RA");
});

test("Embed should parse embed url", () => {
    const tree = parser("https://www.youtube.com/embed/vsF0K3Ou1v0");
    expect(tree.length).toBe(1);
    expect(tree[0].type).toBe("youtube");
    expect(tree[0].id).toBe("vsF0K3Ou1v0");
});

test.skip(
    "Embed should parse url containing query params other than video id",
    () => {
        const tree = parser("https://youtu.be/XUvhAPs38RA?t=12334");
        expect(tree.length).toBe(1);
        expect(tree[0].type).toBe("youtube");
        expect(tree[0].id).toBe("XUvhAPs38RA");
    }
);
