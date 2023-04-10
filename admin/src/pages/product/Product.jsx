// import { Link } from "react-router-dom";
// import "./product.css";
// import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
// import { Publish } from "@material-ui/icons";

// // import { Link } from "react-router-dom";


// export default function Product() {
//   return (
//     <div className="product">
//       <div className="productTitleContainer">
//         <h1 className="productTitle">Edit Product</h1>
//         <Link to="/newproduct">
//           <button className="productAddButton">Create</button>
//         </Link>
//       </div>
//       <div className="productTop">
//           <div className="productTopLeft">
//               <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
//           </div>
//           <div className="productTopRight">
//               <div className="productInfoTop">
//                   <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
//                   <span className="productName">Apple Airpods</span>
//               </div>
//               <div className="productInfoBottom">
//                   <div className="productInfoItem">
//                       <span className="productInfoKey">id:</span>
//                       <span className="productInfoValue">123</span>
//                   </div>
//                   <div className="productInfoItem">
//                       <span className="productInfoKey">sales:</span>
//                       <span className="productInfoValue">5123</span>
//                   </div>
//                   <div className="productInfoItem">
//                       <span className="productInfoKey">active:</span>
//                       <span className="productInfoValue">yes</span>
//                   </div>
//                   <div className="productInfoItem">
//                       <span className="productInfoKey">in stock:</span>
//                       <span className="productInfoValue">no</span>
//                   </div>
//               </div>
//           </div>
//       </div>
//       <div className="productBottom">
//           <form className="productForm">
//               <div className="productFormLeft">
//                   <label>Product Name</label>
//                   <input type="text" placeholder="Apple AirPod" />
//                   <label>In Stock</label>
//                   <select name="inStock" id="idStock">
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                   </select>
//                   <label>Active</label>
//                   <select name="active" id="active">
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                   </select>
//               </div>
//               <div className="productFormRight">
//                   <div className="productUpload">
//                       <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
//                       <label for="file">
//                           <Publish/>
//                       </label>
//                       <input type="file" id="file" style={{display:"none"}} />
//                   </div>
//                   <button className="productButton">Update</button>
//               </div>
//           </form>
//       </div>
//     </div>

   
//   );
// }

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
  import "./user.css";
  import sasimage from '../../pages/images/hero-img-1.svg'
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Product</h1>
          <Link to="/newProduct">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
              
              src={sasimage}
                // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Shirmp</span>
                <span className="userShowUserTitle">dessert</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Product Details</span>
              <div className="userShowInfo">
                <CloudUpload className="userShowIcon" />
                <span className="userShowInfoTitle">ID : 1</span>
              </div>
              <div className="userShowInfo">
                <House className="userShowIcon" />
                <span className="userShowInfoTitle">Stock : 123</span>
              </div>
              {/* <span className="userShowTitle">Contact Details</span> */}
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">Status : Active</span>
              </div>
              <div className="userShowInfo">
                <Money className="userShowIcon" />
                <span className="userShowInfoTitle">Price : 120$</span>
              </div>
              {/* <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div> */}
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>ID</label>
                  <input
                    type="text"
                    placeholder="id "
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Name of Product</label>
                  <input
                    type="text"
                    placeholder="name"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Stock</label>
                  <input
                    type="text"
                    placeholder="quantity"
                    className="userUpdateInput"
                  />
                </div>

                <div className="userUpdateItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="yes">Active</option>
            <option value="no">No Active</option>
          </select>
        </div>
                {/* <div className="userUpdateItem">
                  <label>Status</label>
                  <input
                    type="text"
                    placeholder="Active"
                    className="userUpdateInput"
                  />
                </div> */}
                <div className="userUpdateItem">
                  <label>Price of Product</label>
                  <input
                    type="text"
                    placeholder="price"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={sasimage}
                    // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
