import React from "react";
import { register } from "@minni-im/minni-embed";

class YoutubeEmded extends React.Component {
  render() {
    return <div />;
  }
}

register("video.youtube", YoutubeEmbed);
