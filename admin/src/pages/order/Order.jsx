
  

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  Menu,
  Details,
  PermIdentity,
  PhoneAndroid,
  Money,
  Publish,
  TransferWithinAStation,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./order.css";

export default function Order() {
  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Edit order</h1>
       
      </div>
      <div className="orderContainer">
        <div className="orderShow">
          <div className="orderShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="orderShowImg"
            />
            <div className="orderShowTopTitle">
              <span className="orderShowordername">Anna Becker</span>
              <span className="orderShoworderTitle">Software Engineer</span>
            </div>
          </div>
          <div className="orderShowBottom">
            <span className="orderShowTitle">Order Details</span>
            <div className="orderShowInfo">
              <PermIdentity className="orderShowIcon" />
              <span className="orderShowInfoTitle">ID:</span>
            </div>
            <div className="orderShowInfo">
              <CalendarToday className="orderShowIcon" />
              <span className="orderShowInfoTitle">12/04/2023</span>
            </div>
            <div className="orderShowInfo">
              <Details className="orderShowIcon" />
              <span className="orderShowInfoTitle">2 sushi set for 3 </span>
            </div>
            <div className="orderShowInfo">
              <TransferWithinAStation className="orderShowIcon" />
              <span className="orderShowInfoTitle">Delivering</span>
            </div>
            <div className="orderShowInfo">
              <Money className="orderShowIcon" />
              <span className="orderShowInfoTitle">1.000.000.000</span>
            </div>
            <span className="orderShowTitle">Contact Details</span>
            <div className="orderShowInfo">
              <PhoneAndroid className="orderShowIcon" />
              <span className="orderShowInfoTitle">0338351992</span>
            </div>
            <div className="orderShowInfo">
              <MailOutline className="orderShowIcon" />
              <span className="orderShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="orderShowInfo">
              <LocationSearching className="orderShowIcon" />
              <span className="orderShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="orderUpdate">
          <span className="orderUpdateTitle">Edit</span>
          <form className="orderUpdateForm">
            <div className="orderUpdateLeft">
              <div className="orderUpdateItem">
                <label>ordername</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="orderUpdateInput"
                />
              </div>
              <div className="orderUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="orderUpdateInput"
                />
              </div>
              <div className="orderUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="orderUpdateInput"
                />
              </div>
              <div className="orderUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="orderUpdateInput"
                />
              </div>
              <div className="orderUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="orderUpdateInput"
                />
              </div>
            </div>
            <div className="orderUpdateRight">
              <div className="orderUpdateUpload">
                <img
                  className="orderUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="orderUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="orderUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
