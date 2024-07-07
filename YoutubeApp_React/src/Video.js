import React from "react";
import { Link } from "react-router-dom";
import classes from "./youtube.module.css";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const Video = (props) => {

  const timeAgo=new TimeAgo("en-us");
  const dateAdded=new Date(props.dateAdded);

  return (
    <Link to={`/watch/${props.id}`} className={classes.video_container}>
      <div className={classes.video_image}>
        <img src={props.thumbnail.url} alt={props.title} />
      </div>
      <div className={classes.video_info}>
        <h3>{props.title}</h3>
        <p>{timeAgo.format(dateAdded)}</p>
        <h4>{props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
