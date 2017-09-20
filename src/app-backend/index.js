import { OEmbed, register } from "@minni-im/minni-embed";

const REGEXP_YOUTUBE = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/watch\/?\?(?:.+&)?v=(\w+)[\S]?/;
const REGEXP_YOUTUBE_EMBED = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/(?:embed|v)\/([^\s]+[\S])/;
const REGEXP_YOUTU_BE = /^https?:\/\/youtu\.be\/(\w+)[\S]?/;

export default class YoutubeEmbed extends OEmbed {
  name = "Youtube";
  type = "video.youtube";

  match(source) {
    return (
      REGEXP_YOUTUBE.exec(source) ||
      REGEXP_YOUTUBE_EMBED.exec(source) ||
      REGEXP_YOUTU_BE.exec(source)
    );
  }

  parse(capture) {
    return {
      url: capture[0],
      id: capture[1],
    };
  }

  endPointUrl({ id: videoId }) {
    const videoUrl = encodeURI(`https://youtube.com/watch?v=${videoId}`);
    return `http://www.youtube.com/oembed?url=${videoUrl}`;
  }
}

register(new YoutubeEmbed());
