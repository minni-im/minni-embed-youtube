"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minniEmbed = require("@minni-im/minni-embed");

const REGEXP_YOUTUBE = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/watch\/?\?(?:.+&)?v=([^\s]+[\S])/;
const REGEXP_YOUTUBE_EMBED = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/(?:embed|v)\/([^\s]+[\S])/;
const REGEXP_YOUTU_BE = /^https?:\/\/youtu\.be\/([^\s]+[\S])/;

class YoutubeEmbed extends _minniEmbed.OEmbed {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.name = "Youtube", this.type = "video.youtube", _temp;
  }

  match(source) {
    return REGEXP_YOUTUBE.exec(source) || REGEXP_YOUTUBE_EMBED.exec(source) || REGEXP_YOUTU_BE.exec(source);
  }

  parse(capture) {
    return {
      url: capture[0],
      id: capture[1]
    };
  }

  endPointUrl({ id: videoId }) {
    const videoUrl = encodeURI(`https://youtube.com/watch?v=${videoId}`);
    return `http://www.youtube.com/oembed?url=${videoUrl}&format=json`;
  }
}

exports.default = YoutubeEmbed;
(0, _minniEmbed.register)(new YoutubeEmbed());