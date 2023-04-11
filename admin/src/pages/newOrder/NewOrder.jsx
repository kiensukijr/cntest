import "./newOrder.css";

export default function NewOrder() {
  return (
    <div className="newOrder">
      <h1 className="newOrderTitle">New Order</h1>
      <form className="newOrderForm">
        <div className="newOrderItem">
          <label>Ordername</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newOrderItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newOrderItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newOrderItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newOrderItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newOrderItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newOrderItem">
          <label>Gender</label>
          <div className="newOrderGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newOrderItem">
          <label>Active</label>
          <select className="newOrderSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newOrderButton">Create</button>
      </form>
    </div>
  );
}
