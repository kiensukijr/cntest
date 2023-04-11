import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Order from "./pages/order/Order";
import OrderList from "./pages/orderList/OrderList";  
import NewOrder from "./pages/newOrder/NewOrder";
import ReviewList from "./pages/reviewList/ReviewList";
import Review from "./pages/review/Review"
import NewReview from "./pages/newReview/NewReview";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>

          <Route path="/orderscd">
            <OrderList />
          </Route>
          <Route path="/order/:orderId">
            <Order />
          </Route>
          <Route path="/newOrder">
            <NewOrder />
          </Route>

          <Route path="/reviews">
            <ReviewList />
          </Route>
          <Route path="/review/:reviewId">
            <Review />
          </Route>
          <Route path="/newReview">
            <NewReview />
          </Route>

       


          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
