import React, { useEffect, useState } from "react";
import { getRequest } from "../commons/Axios";

const OrderItems = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var response = await getRequest("/Item");
      setItemList(response);
    }

    fetchData();
  }, []);

  const getTableDetails = (itemList) => {
    return (
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="item-list">
      <h1>Place Order</h1>
      <br></br>
      {(itemList && itemList.length>0) ? getTableDetails(itemList) : <div>No data found</div>}
    </div>
  );
};

export default OrderItems;
