import React from "react";

class Merchant extends React.Component {
  state = {
    name: "",
    price: "",
    quantity: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.price === "" ||
      this.state.quantity === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }

    //save item API call

    this.setState({ name: "", price: "", quantity: "" });
  };

  render() {
    return (
      <div className="ui main item-content">
        <h2>Add Items</h2>
        <br></br>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label className="field-lable">Enter the name of the product</label>
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
    );
  }
}

export default Merchant;
