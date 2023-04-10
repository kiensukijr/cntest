import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>ID</label>
          <input type="text" placeholder="ID" />
        </div>
        <div className="addProductItem">
          <label>Name of Product</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="yes">Active</option>
            <option value="no">No Active</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="120$"/>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
