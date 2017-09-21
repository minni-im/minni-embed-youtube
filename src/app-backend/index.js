import { OEmbed, register } from "@minni-im/minni-embed";

const REGEXP_YOUTUBE = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/watch\/?\?(?:.+&)?v=(\w+)[\S]?/;
const REGEXP_YOUTUBE_EMBED = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/(?:embed|v)\/([^\s]+[\S])/;
const REGEXP_YOUTU_BE = /^https?:\/\/youtu\.be\/(\w+)[\S]?/;

export const name = "Youtube";
export const type = "video.youtube";

export default class YoutubeEmbed extends OEmbed {
  name = name;
  type = type;

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

  endpointUrl({ id: videoId }) {
    const videoUrl = encodeURI(`https://youtube.com/watch?v=${videoId}`);
    return `http://www.youtube.com/oembed?url=${videoUrl}&format=json`;
  }
}

export function init(conf) {
  register(new YoutubeEmbed());
}
