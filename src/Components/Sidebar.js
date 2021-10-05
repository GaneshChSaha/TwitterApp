import React from "react";
import {
  FaTwitter,
  FaHome,
  FaSlackHash,
  FaRegBell,
  FaRegEnvelopeOpen,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="">
            <FaHome className="icons logo"/>
            Home
          </a>
        </li>
        <li>
          <a href="">
            <FaSlackHash className="icons"/>
            Explore
          </a>
        </li>
        <li>
          <a href="">
          <FaClipboardList className="icons"/>
          List
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell className="icons"/>
            Notification
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelopeOpen className="icons"/>
            Messages
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons"/>
            Bookmark
          </a>
        </li>
        <li>
            <a href="">

            <FaUserAlt className="icons"/>
            Profile
            </a>
        </li>
        <li>
            <a href="">
                <FaMehBlank className="icons"/>
                More
            </a>
        </li>
        <div className="sidebar_Btn">
          <a href="">Profile</a>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;