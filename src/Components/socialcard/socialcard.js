import React from "react";
import "./socialcard.scss";

export default function socialcard() {
  return (
    <div className="socialcard">
      <div className="socialcard__top">
        <div className="socialcard__top__left">
          <div className="socialcard__top__info__userimg">DEV</div>
        </div>
        <div className="socialcard__top__right">
          <div className="socialcard__top__info">
            <div className="socialcard__top__info__top">
              <div className="socialcard__top__info__username">
                The Practical Dev
              </div>
              <div className="socialcard__top__info__userat">
                @ThePracticalDev
              </div>
              <div className="socialcard__top__info__postdate">• Sep 10</div>
            </div>
            <div className="socialcard__top__posttitle">
              Learning React? Start Small.
            </div>
            <div className="socialcard__top__postauthor">
              &#123; author:
              <a href="html//www.notreal.z">@dceddia </a>
              &#125;
            </div>
          </div>
        </div>
      </div>
      <div className="socialcard__mid">
        <div className="socialcard__mid__textbox">
          <div className="socialcard__mid__img"></div>
          <div className="socialcard__mid__textbox__posttitle">
            Learning React? Start Small
          </div>
          <div className="socialcard__mid__textbox__postcontent">
            Can't pry yourself away from the tutorials? The cure is to make tiny
            little experiment apps.
          </div>
          <div className="socialcard__mid__textbox__postlink">dev.to</div>
        </div>
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
