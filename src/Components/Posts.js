import React from "react";
import { FaRegCheckCircle,FaRegComment,FaHeart } from "react-icons/fa";
import {BiRepost,BiUpload} from 'react-icons/bi'
import imagess from "../imagess/ipl.png";
import img from "../img/ipl.jpg";
const Posts = () => {
  return (
    <div className="postss">
      <div className="posts__first">
        <div className="post__first__img">
          <img src={imagess} alt="profile" />
        </div>
        <div className="post__first__name">
          <strong> IndianPremierLeague </strong>
          <FaRegCheckCircle className="verify" />
        </div>
        <div className="post__first__username">
          @IPL <span> 6 min </span>
        </div>
      </div>
      <div className="post__details">
        <div className="post__details__msg">
          #Vivoipl is Back. More update follow <a href="#"> www.iplt20.com</a>  
        </div>
        <div className="post__details__img">
          <img src={img} alt="imageess" />
        </div>
        <div className="icon">
          <span><FaRegComment/>5K</span>
          <span><BiRepost/>900</span>
          <span> <FaHeart/>8K</span>
          <span><BiUpload/>450</span>
            
        </div>
      </div>
    </div>
  );
};

export default Posts;
