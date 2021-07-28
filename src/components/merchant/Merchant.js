import React from "react";
import { postRequest } from "../commons/Axios";
import GetAllItems from "./GetAllItems";
import GetOrderList from "./GetOrderList";

class Merchant extends React.Component {
  state = {
    name: "",
    price: "",
    quantity: "",
  };

  add = async (e) => {
    if (
      this.state.name === "" ||
      this.state.price === "" ||
      this.state.quantity === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    //save item API call
    const respose = await postRequest("/Item", this.state);

    if (respose) {
      window.confirm("item saved");
    } else {
      window.confirm("item not saved");
    }

    this.setState({ name: "", price: "", quantity: "" });
  };

  render() {
    return (
      <div className="ui main item-content">
        <div className="create-item">
          <h2>Add Items</h2>
          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label className="field-lable">
                Enter the name of the product
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter the name of the product"
                value={this.state.name}
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="field-lable">Enter the Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter the Price"
                value={this.state.price}
                required
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </div>{" "}
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
        <GetAllItems />
        <GetOrderList />
      </div>
    );
  }
}

export default Merchant;
