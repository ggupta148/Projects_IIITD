import React, { Component } from "react";
import axios from "axios";
import classes from "./youtube.module.css";

class WatchArea extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=AIzaSyAdjbvl4RnRHThIJ4KZoW3wCyFWnSt-pUs&id=${this.props.match.params.id}`
      )
      .then((res) => {
        const items = res.data.items[0];
        console.log(res);
        this.setState({
          title: items.snippet.title,
          views: items.statistics.viewCount,
          description: items.snippet.description,
          channel: items.snippet.channelTitle,
          like: items.statistics.likeCount,
          url: items.id,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    if(this.state.loading){
      return <h1 className="loader"> Loading..</h1>
    }
    return (
      <div className={classes.watch_area}>
        <div className={classes.player}>
            <iframe src= {`//www.youtube.com/embed/${this.state.url}`} title={this.state.title}
             width="1080"
             height="450"
             frameBorder="0"
             allow="autoplay encrypted-media" ></iframe>
        </div>
        <h1>{this.state.title}</h1>
        <div className={classes.video_stats}>
          <div className={classes}>{this.state.views} Views</div>
          <div className={classes}>{this.state.like} Likes</div>
        </div>
        <div className={classes.channel}>{this.state.channel}</div>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
export default WatchArea;
