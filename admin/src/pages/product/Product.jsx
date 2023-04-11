
import {
    CalendarToday,
    // LocationSearching,
    MailOutline,
    // PermIdentity,
    CloudUpload,
    PhoneAndroid,
    House,
    Money,
    // QrCode,
    Publish,
  } from "@material-ui/icons";


  import { Link } from "react-router-dom";
  import "./product.css";
  import sasimage from '../../pages/images/hero-img-1.svg'
  
  export default function Product() {
    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Edit Product</h1>
          <Link to="/newProduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productContainer">
          <div className="productShow">
            <div className="productShowTop">
              <img
              
              src={sasimage}
                // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productShowImg"
              />
              <div className="productShowTopTitle">
                <span className="productShowproductname">Shirmp</span>
                <span className="productShowproductTitle">dessert</span>
              </div>
            </div>
            <div className="productShowBottom">
              <span className="productShowTitle">Product Details</span>
              <div className="productShowInfo">
                <CloudUpload className="productShowIcon" />
                <span className="productShowInfoTitle">ID : 1</span>
              </div>
              <div className="productShowInfo">
                <House className="productShowIcon" />
                <span className="productShowInfoTitle">Stock : 123</span>
              </div>
              {/* <span className="productShowTitle">Contact Details</span> */}
              <div className="productShowInfo">
                <PhoneAndroid className="productShowIcon" />
                <span className="productShowInfoTitle">Status : Active</span>
              </div>
              <div className="productShowInfo">
                <Money className="productShowIcon" />
                <span className="productShowInfoTitle">Price : 120$</span>
              </div>
              {/* <div className="productShowInfo">
                <LocationSearching className="productShowIcon" />
                <span className="productShowInfoTitle">New York | USA</span>
              </div> */}
            </div>
          </div>
          <div className="productUpdate">
            <span className="productUpdateTitle">Edit</span>
            <form className="productUpdateForm">
              <div className="productUpdateLeft">
                <div className="productUpdateItem">
                  <label>ID</label>
                  <input
                    type="text"
                    placeholder="id "
                    className="productUpdateInput"
                  />
                </div>
                <div className="productUpdateItem">
                  <label>Name of Product</label>
                  <input
                    type="text"
                    placeholder="name"
                    className="productUpdateInput"
                  />
                </div>
                <div className="productUpdateItem">
                  <label>Stock</label>
                  <input
                    type="text"
                    placeholder="quantity"
                    className="productUpdateInput"
                  />
                </div>

                <div className="productUpdateItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="yes">Active</option>
            <option value="no">No Active</option>
          </select>
        </div>
                {/* <div className="productUpdateItem">
                  <label>Status</label>
                  <input
                    type="text"
                    placeholder="Active"
                    className="productUpdateInput"
                  />
                </div> */}
                <div className="productUpdateItem">
                  <label>Price of Product</label>
                  <input
                    type="text"
                    placeholder="price"
                    className="productUpdateInput"
                  />
                </div>
              </div>
              <div className="productUpdateRight">
                <div className="productUpdateUpload">
                  <img
                    className="productUpdateImg"
                    src={sasimage}
                    // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="productUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
