import React from "react";
import "./socialcard.scss";
import comment from "../../Images/icons/comments.png";
import repost from "../../Images/icons/repost.png";
import liked from "../../Images/icons/heart.png";
import likeaf from "../../Images/icons/heart_after.png";
import mail from "../../Images/icons/mail.png";

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
          <div className="socialcard__mid__text">
            <div className="socialcard__mid__textbox__posttitle">
              Learning React? Start Small.
            </div>
            <div className="socialcard__mid__textbox__postcontent">
              Can't pry yourself away from the tutorials? The cure is to make
              tiny little experiment apps.
            </div>
            <div className="socialcard__mid__textbox__postlink">dev.to</div>
          </div>
        </div>
      </div>
      <div className="socialcard__bot">
        <img
          className="socialcard__bot__commenticon"
          src={comment}
          alt="comment icon"
        />
        <div className="socialcard__bot__comment">200</div>
        <img
          className="socialcard__bot__reposticon"
          src={repost}
          alt="repost"
        />
        <div className="socialcard__bot__repost">2</div>
        <img className="socialcard__bot__likedicon" src={liked} alt="liked" />
        <div className="socialcard__bot__liked">2235</div>
        <img className="socialcard__bot__mailicon" src={mail} alt="mail" />
      </div>
    </div>
  );
}
