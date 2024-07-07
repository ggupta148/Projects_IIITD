import React from "react";
import Video from "./Video";
import classes from './youtube.module.css';

const Results = ({ videos }) => {
  return (
    <div className={classes.search_result}>
      {videos.map((video) => {
        return (
          <Video
            key={video.id.videoId}
            title={video.snippet.title}
            dateAdded={video.snippet.publishedAt}
            thumbnail={video.snippet.thumbnails.medium}
            channel={video.snippet.channelTitle}
            description={video.snippet.description}
            id={video.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default Results;
