"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.name = undefined;
exports.init = init;

var _minniEmbed = require("@minni-im/minni-embed");

const REGEXP_YOUTUBE = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/watch\/?\?(?:.+&)?v=(\w+)[\S]?/;
const REGEXP_YOUTUBE_EMBED = /^https?:\/\/(?:[^\.]+\.)?youtube\.com\/(?:embed|v)\/([^\s]+[\S])/;
const REGEXP_YOUTU_BE = /^https?:\/\/youtu\.be\/(\w+)[\S]?/;

const name = exports.name = "Youtube";
const type = exports.type = "video.youtube";

class YoutubeEmbed extends _minniEmbed.OEmbed {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.name = name, this.type = type, _temp;
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
    return `http://www.youtube.com/oembed?url=${videoUrl}`;
  }
}

exports.default = YoutubeEmbed;
function init(conf) {
  (0, _minniEmbed.register)(new YoutubeEmbed());
}