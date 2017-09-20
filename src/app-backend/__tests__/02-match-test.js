import YoutubeEmbed from "../";

let embed = new YoutubeEmbed();

test("Embed should detect proper Youtube urls", () => {
  const urls = [
    "https://www.youtube.com/watch?v=4SbiiyRSIwo",
    "https://youtu.be/XUvhAPs38RA",
    "https://www.youtube.com/embed/vsF0K3Ou1v0",
    "https://youtu.be/XUvhAPs38RA?t=37s",
    "https://youtu.be/XUvhAPs38RA?t=1m39",
  ];

  urls.forEach(url => {
    expect(embed.match(url)).toBeTruthy();
  });
});
