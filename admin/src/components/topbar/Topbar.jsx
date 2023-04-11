import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, OutdoorGrill, OutlinedFlag } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Japanese Food</span>

        </div>

     


        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
         
          <div className="topbarIconContainer">
            <OutlinedFlag />
            <span className="textLogout">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
