import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
         
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Manage</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Foods
              </li>
            </Link>

           

            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Orders
              </li>
            </Link>
            
            

            <Link to="/reviews" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reviews
              </li>
            </Link> </ul>

            <h3 className="sidebarTitle">Create</h3>
          <ul className="sidebarList">
            <Link to="/newProduct" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Create Food
              </li>
            </Link>
            <Link to="/newReview" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Create Review
              </li>
            </Link>
          </ul>
        </div>
       
       
      </div>

      
    </div>
  );
}
