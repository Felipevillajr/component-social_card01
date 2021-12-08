import React from "react";
import "./socialcard.scss";

export default function socialcard() {
  return (
    <div className="socialcard">
      <div className="socialcard__top">
        <div className="socialcard__top__userimg">DEV</div>
        <div className="socialcard__top__username"></div>
        <div className="socialcard__top__userat"></div>
        <div className="socialcard__top__postdate"></div>
        <div className="socialcard__top__posttitle"></div>
        <div className="socialcard__top__postauthor"></div>
      </div>
      <div className="socialcard__mid">
        <div className="socialcard__mid__img"></div>
        <div className="socialcard__mid__posttitle"></div>
        <div className="socialcard__mid__postcontent"></div>
        <div className="socialcard__mid__postlink"></div>
      </div>
      <div className="socialcard__bot">
        <div className="socialcard__bot__commenticon"></div>
        <div className="socialcard__bot__reposticon"></div>
        <div className="socialcard__bot__likedicon"></div>
        <div className="socialcard__bot__mailicon"></div>
      </div>
    </div>
  );
}
