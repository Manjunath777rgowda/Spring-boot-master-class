import React from "react";
import { postRequest } from "../commons/Axios";
import CustomerOrderList from "./CustomerOrderList";
import OrderItems from "./OrderItem";

class Customer extends React.Component {
  state = {
    itemId: "",
    quantity: "",
  };

  placeOrder = async (e) => {
    if (this.state.itemId === "" || this.state.quantity === "") {
      alert("All the fields are mandatory!");
      return;
    }

    //save item API call
    const respose = await postRequest("/Order", this.state);

    if (respose) {
      window.confirm("Order Placed Successfully");
    } else {
      window.alert("Order Failed");
    }

    this.setState({ itemId: "", quantity: "" });
  };

  render() {
    return (
      <div className="ui main item-content">
        <div className="create-item">
          <h2>Order Items</h2>
          <form className="ui form" onSubmit={this.placeOrder}>
            <div className="field">
              <label className="field-lable">Enter the Product Id</label>
              <input
                type="number"
                name="id"
                placeholder="Enter the Product Id"
                value={this.state.itemId}
                required
                onChange={(e) => this.setState({ itemId: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="field-lable">Enter the Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter the Quantity"
                value={this.state.quantity}
                required
                onChange={(e) => this.setState({ quantity: e.target.value })}
              />
            </div>
            <button className="ui button blue">Add Item</button>
          </form>
        </div>

        <OrderItems />
        <CustomerOrderList />
      </div>
    );
  }
}

export default Customer;
