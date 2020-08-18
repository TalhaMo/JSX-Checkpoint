import React, { Component } from 'react';
import myVideo from "./Video.mp4";

class Video extends Component {
    render() {
      return (
        <div className="Video">
        <h3>Start to learn react:</h3><br/>
        <video width="320" height="240" controls >
        <source src={myVideo} type="video/mp4"/>
       </video>
        </div>
      );
    }   
  }
  export default Video;