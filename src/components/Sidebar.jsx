import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
const Sidebar = ({bgColor, color}) => {
  return (
    <>
      <div className="side_bar_content" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
        <div className="top_content">
          <div className="items">
            <FaHome className="icons" /> Home
          </div>
          <div className="items">
            <IoIosNotifications className="icons" /> Notification
          </div>
          <div className="items">
            <FaBagShopping className="icons" /> Shop
          </div>
          <div className="items">
            <IoIosChatboxes className="icons" />
            Conversation
          </div>
          <div className="items">
            {" "}
            <FaWallet className="icons" />
            Wallet
          </div>
          <div className="items">
            <FaYoutube className="icons" /> Subscription
          </div>
          <div className="items">
            <CgProfile className="icons" /> My Profile
          </div>
        </div>
        <div className="bottom_content items">
          <RiLogoutBoxFill className="icons" /> Log Out
        </div>
      </div>
    </>
  );
};

export default Sidebar;
